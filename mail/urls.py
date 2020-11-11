from . import views
from django.urls import path

urlpatterns = [
    path('mail/', views.email),
]
