from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse('<h1>Pre-Events</h1>')

def StrateGICC(request):
    return HttpResponse('<h1>StrateGICC</h1>')

def GICClass(request):
    return HttpResponse('<h1>GICClass</h1>')

def DialoGICC(request):
    return HttpResponse('<h1>DialoGICC</h1>')

def MiniCC(request):
    return HttpResponse('<h1>MiniCC</h1>')
