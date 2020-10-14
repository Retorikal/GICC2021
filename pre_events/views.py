from django.shortcuts import render

from rest_framework import views
from rest_framework.response import Response
from pre_events.models import Preevent
from pre_events.serializers import preevent_information

class PreeventInfo(views.APIView):
    def get_object(self, name):
        try:
            return Preevent.objects.get(name=name)
        except Preevent.DoesNotExist:
            raise Http404

    def get(self, request, name, format=None):
        event = self.get_object(name)
        serializer = preevent_information(event)
        return Response(serializer.data)

from django.http import HttpResponse

def home(request):
    return HttpResponse('<h1>Pre-Events</h1>')
'''

def StrateGICC(request):
    return HttpResponse('<h1>StrateGICC</h1>')

def GICClass(request):
    return HttpResponse('<h1>GICClass</h1>')

def DialoGICC(request):
    return HttpResponse('<h1>DialoGICC</h1>')

def MiniCC(request):
    return HttpResponse('<h1>MiniCC</h1>')
'''
