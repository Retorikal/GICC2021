from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.home, name='pre-events-home'),
    path('info/<str:eventname>', views.PreeventInfo.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
