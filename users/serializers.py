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

    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)

    default_error_messages = {
        'username': 'The username should only contain alphanumeric characters'}

    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'first_name',
            'last_name',
            'email',
        ]
    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')

        if not username.isalnum():
            raise serializers.ValidationError(
                self.default_error_messages)
        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
   

class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ['token']


