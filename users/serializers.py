from rest_framework import serializers
from django.contrib.auth.models import User
from . models import *

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = [
            'user',
            'nim',
            'uni',
            'major',

            'line',
            'phone_no',

            'signedup_preevent',
        ]

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'first_name',
            'last_name',
            'email',
        ]


