from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='pre-events-home'),
    path('StrateGICC/', views.StrateGICC, name='StrateGICC'),
    path('GICClass/', views.GICClass, name='GICClass'),
    path('DialoGICC/', views.DialoGICC, name='DialoGICC'),
    path('MiniCC/', views.MiniCC, name='MiniCC'),
]
