from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.conf import settings
from django.contrib.auth.password_validation import *

# Rest framework
from django.http import Http404
from rest_framework import views, generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.parsers import JSONParser

import jwt
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

#serializers
from .serializers import SignupSerializer, EmailVerificationSerializer, ParticipantSerializer

# Models
from users.models import *
from users.serializers import *
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import *

#models
from .models import Participant

# Errors
from django.db import IntegrityError
import re

# HttpResponse
from django.http import HttpResponse

class Usermanage(generics.GenericAPIView):
    # Add new user
    def addUser(self, request):
        user = User()
        deserializer = SignupSerializer(user, data = request.data)

        try:
            # Validation
            deserializer.is_valid(raise_exception=True)
            if User.objects.filter(email=deserializer.validated_data["email"]).exists():
                raise Exception("'That email address is already taken.'")
            validate_password(deserializer.validated_data["password"])

            # Save user
            deserializer.save()
            user.set_password(deserializer.validated_data["password"])
            user.save()

            # Save participant
            participant = Participant(user=user)
            participant.save()

            participant.postVerifMail()

            return Response(deserializer.data, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            raise

    # PUT response: create new user            
    def put(self, request, format=None):
        try:
            self.addUser(request)
            return Response(request.data, status=status.HTTP_201_CREATED)
        # TODO: Handle exception buat password jelek, email dobel, atau username taken
        except Exception as e:
            print(str(e))
            # Get quotation enclosed parts of the error to send back
            return Response({'error': re.findall(r"'(([\w\. ]){10,100})'", str(e))}, status=status.HTTP_403_FORBIDDEN)

    # POST response: update data
    def post(self, request, format=None):
        deserializer = ParticipantSerializer(request.user.participant, request.data, partial=True)

        if deserializer.is_valid(raise_exception=True):
            if(request.user.participant.mail_verified == False):
                return Response({'mail': ["Please verify your email before updating any data."]}, status=status.HTTP_403_FORBIDDEN)
            else if (request.user.participant.is_verified):
                return Response({'verivied': ["Data cannot be changed after verification is done."]}, status=status.HTTP_403_FORBIDDEN)
            else:
                deserializer.save()
                return Response(deserializer.data)
        else:
            return Response({'?':'Invalid data'},status=status.HTTP_400_BAD_REQUEST)

    # GET response: general information about the user
    def get(self, request, format=None):
        serializer = ParticipantSerializer(request.user.participant)
        return Response(serializer.data)

class Files(views.APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):

        defaults = {'file': request.FILES["file"]}        
        obj, created = ParticipantFile.objects.update_or_create(owner=request.user.participant, purpose=request.POST.get('purpose'), defaults=defaults)

        file = ParticipantFile.objects.filter(owner=request.user.participant, purpose=request.POST.get('purpose')).first()

        # If the file is already submitted
        if file == None:
            obj, created = ParticipantFile.objects.create(owner=request.user.participant, purpose=request.POST.get('purpose'), file=request.FILES["file"])
            
            content = {'success': request.POST.get('purpose')}
            return Response(content, status=status.HTTP_201_CREATED)

        else:
            if file.verified:
                content = {'error': "This file is already verified. You don't need to update it."}
                return Response(content, status=status.HTTP_403_FORBIDDEN)
            else:
                file.file = request.FILES["file"]
                file.save()
                content = {'success': request.POST.get('purpose')}
                return Response(content, status=status.HTTP_201_CREATED)

class VerifyEmail(views.APIView):
    serializer_class = EmailVerificationSerializer

    token_param_config = openapi.Parameter(
        'token', in_=openapi.IN_QUERY, description='Description', type=openapi.TYPE_STRING)

    def post(self, request):
        if not request.user.participant.mail_verified:
            request.user.participant.postVerifMail()
            return Response({"success": "Verification re-sent."}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Mail already verified."}, status=status.HTTP_403_FORBIDDEN)

    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY)
            user = User.objects.get(id=payload['user_id'])
            if not user.participant.mail_verified:
                user.participant.mail_verified = True
                user.participant.save()
            return HttpResponse('<h4>Email verified. Please try logging in.</h4>')
        except jwt.ExpiredSignatureError as identifier:
            return HttpResponse('<h4>Link expired. Please log in and request a re-send.</h4>', status=400)
        except jwt.exceptions.DecodeError as identifier:
            return HttpResponse('<h4>Invalid token.</h4>')
