from django.shortcuts import render

from rest_framework import views
from rest_framework.response import Response
from pre_events.models import Preevent
from pre_events.serializers import Preevent_information
from users.models import Participant

class PreeventInfo(views.APIView):
    def get(self, request, eventname, format=None):
        event = Preevent.objects.get(name=eventname)
        preEinfo = {"name":event.name, "reg_users":event.regis_users.count()}
        serializer = Preevent_information(preEinfo)
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
