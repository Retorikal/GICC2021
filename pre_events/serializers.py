from rest_framework import serializers
from pre_events.models import *

'''
class PreInfoSerializer(serializers.Serializer):
    name = serializers.CharField()
    reg_users = serializers.IntegerField()
'''

class PreInfoSerializer(serializers.ModelSerializer):
    reg_users = serializers.IntegerField()

    class Meta:
        model = Preevent
        fields = ['name', 'reg_users']

class PreSignupSerializer(serializers.Serializer):
    name = serializers.CharField()
    action = serializers.CharField() # 'signup' or 'withdraw'

'''

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Snippet.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.title = validated_data.get('title', instance.title)
        instance.code = validated_data.get('code', instance.code)
        instance.linenos = validated_data.get('linenos', instance.linenos)
        instance.language = validated_data.get('language', instance.language)
        instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance

'''
