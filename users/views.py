from django.shortcuts import render
from django.http import HttpResponse

# Rest framework
from django.http import Http404
from rest_framework import views
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Models
from users.models import *
from users.serializers import *
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import *

# Errors
from django.db import IntegrityError

class Signup(views.APIView):
    def addUser(self, data):
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

    def post(self, request, format=None):
        file_val = Validation(owner=request.user.participant, file=request.FILES["file"])
        file_val.save()

        content = {'message': request.user.username}
        return Response(content)
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

