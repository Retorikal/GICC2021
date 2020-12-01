from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

from .views import VerifyEmail


urlpatterns = [
    path('signup/', views.Signup.as_view()),
    path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
]

urlpatterns = format_suffix_patterns(urlpatterns)