from django.shortcuts import render
from django.http import HttpResponse

# Rest framework
from django.http import Http404
from rest_framework import views
from rest_framework.response import Response
from rest_framework import status

# Models
from pre_events.models import *
from pre_events.serializers import *
from users.models import Participant

from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from PIL import Image

class PreeventSignup(views.APIView):
    def get(self, request, format=None):
        #event = Preevent.objects.get(name=eventname)
        events = Preevent.objects.all()
        preEInfos= []

        for event in events:
            preEInfos.append({"name":event.name, "desc":event.desc, "reg_users":event.reg_users.count()})

        serializer = PreInfoSerializer(preEInfos, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        deserializer = PreSignupSerializer(data = request.data)

        if request.user.is_authenticated:
            if deserializer.is_valid():

                action = deserializer.validated_data["action"]
                e = Preevent.objects.get(name=deserializer.validated_data["name"])
                p = request.user.participant

                if action == "signup":
                    p.signedup_preevent.add(e)
                elif action == "withdraw":
                    p.signedup_preevent.remove(e)

                p.save()
                
                return Response(deserializer.data)
            else:
                return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(deserializer.errors, status=status.HTTP_400_BAD_REQUEST) # Harusnya forbidden

def home(request):
    return HttpResponse('<h1>Pre-Events</h1>')

# Image Validation

class ImageUploadParser(FileUploadParser):
    media_type = 'image/*'

class UploadPayment(views.APIView):
    parser_class = (ImageUploadParser,)

    def put(self, request, format=None):
        if 'file' not in request.data:
            raise ParseError("Empty content")

        f = request.data['file']

        try:
            img = Image.open(f)
            img.verify()
        except:
            raise ParseError("Unsupported image type")

        Preevent.payment.save(f.name, f, save=True)
        return Response(status=status.HTTP_201_CREATED)

    def delete(self, request, format=None):
        Preevent.payment.delete(save=True)
        return Response(status=status.HTTP_204_NO_CONTENT)

class UploadTwibbon(views.APIView):
    parser_class = (ImageUploadParser,)

    def put(self, request, format=None):
        if 'file' not in request.data:
            raise ParseError("Empty content")

        f = request.data['file']

        try:
            img = Image.open(f)
            img.verify()
        except:
            raise ParseError("Unsupported image type")

        Preevent.twibbon.save(f.name, f, save=True)
        return Response(status=status.HTTP_201_CREATED)

    def delete(self, request, format=None):
        Preevent.twibbon.delete(save=True)
        return Response(status=status.HTTP_204_NO_CONTENT)

