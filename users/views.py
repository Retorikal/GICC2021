from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.conf import settings

# Rest framework
from django.http import Http404
from rest_framework import views
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken

import jwt
from .serializers import SignupSerializer, EmailVerificationSerializer
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema


from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Models
from users.models import *
from users.serializers import *
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import *

# Errors
from django.db import IntegrityError

#utils
from .utils import Util

class Signup(views.APIView):
    serializer_class = SignupSerializer
    def addUser(self, request, data):
        user = User()
        deserializer = SignupSerializer(user, data = data)

        try:
            if deserializer.is_valid(raise_exception=True):
                validate_password(deserializer.validated_data["password"])
            
                deserializer.save()
                user.set_password(deserializer.validated_data["password"])
                user.save()
        except Exception as e:
            raise

    def post(self, request, format=None):
        try:
            self.addUser(request.data)
            return Response(request.data, status=status.HTTP_201_CREATED)
        # TODO: Handle exception buat password jelek, email dobel, atau username taken
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_403_FORBIDDEN)

class Verify(views.APIView):
    def get(self, data):
        return Response({'status': 'ok'}, status=status.HTTP_200_OK)

class Files(views.APIView):
    permission_classes = (IsAuthenticated,)

            ### ADD ###
            #user = request.data
            #serializer = self.serializer_class(data=user)
            deserializer.is_valid(raise_exception=True)
            deserializer.save()
            user_data = deserializer.data
            user = User.objects.get(email=user_data['email'])
            token = RefreshToken.for_user(user).access_token
            current_site = get_current_site(request).domain
            relativeLink = reverse('email-verify')
            absurl = 'http://'+current_site+relativeLink+"?token="+str(token)
            email_body = 'Hi '+user.username + \
                ' Use the link below to verify your email \n' + absurl
            datum = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Verify your email'}

            Util.send_email(datum)
        

                ### ADD ###


    def post(self, request, format=None):

        self.addUser(request.data, request.data)

        return Response(request.data, status=status.HTTP_201_CREATED)

class VerifyEmail(views.APIView):
    serializer_class = EmailVerificationSerializer

    token_param_config = openapi.Parameter(
        'token', in_=openapi.IN_QUERY, description='Description', type=openapi.TYPE_STRING)

    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY)
            user = User.objects.get(id=payload['user_id'])
            if not user.is_verified:
                user.is_verified = True
                user.save()
            return Response({'email': 'Successfully activated'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:
            return Response({'error': 'Activation Expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identifier:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)

        file_val = Validation(owner=request.user.participant, file=request.FILES["file"])
        file_val.save()

        content = {'message': request.user.username}
        return Response(content)

