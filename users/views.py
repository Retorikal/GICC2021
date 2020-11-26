from django.shortcuts import render
from django.http import HttpResponse

# Rest framework
from django.http import Http404
from rest_framework import views
from rest_framework.response import Response
from rest_framework import status

# Models
from users.models import *
from users.serializers import *
from django.contrib.auth.models import User

class Signup(views.APIView):
    def addUser(self, data):
        user = User()
        deserializer = SignupSerializer(user, data = data)

        if deserializer.is_valid():
            deserializer.save()
            user.set_password(deserializer.validated_data["password"])
            user.save()

    def post(self, request, format=None):
        self.addUser(request.data)
        return Response(request.data, status=status.HTTP_201_CREATED)