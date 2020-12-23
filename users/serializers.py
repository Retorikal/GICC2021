from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
        ]

        read_only_fields = ['username']

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParticipantFile
        fields = [
            'purpose',
            'event',
            'file',
            'verified'
        ]
        read_only_fields = ['verified', 'file']

class ParticipantSerializer(serializers.ModelSerializer):
    user = UserSerializer(required = False)
    files = FileSerializer(many=True, required = False)

    def update(self, instance, validated_data):
        userdata = validated_data.pop("user", None)

        userdese = UserSerializer(instance.user, userdata, partial=True)
        if userdese.is_valid():
            userdese.save()
        
        super(ParticipantSerializer, self).update(instance, validated_data)
        return instance
        

    class Meta:
        model = Participant
        fields = [
            'user',

            'uni',
            'major',

            'line',
            'phone_no',

            'is_verified',
            'agree_terms',

            'sector',
            
            'files'
        ]

        read_only_fields = ['is_verified', 'files']

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)

    default_error_messages = {
        'username': 'The username should only contain alphanumeric characters'}

    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')

        if not username.isalnum():
            raise serializers.ValidationError(self.default_error_messages)
        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'first_name',
            'last_name',
            'email',
        ]
   

class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ['token']


