from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('', views.Usermanage.as_view()),
    path('files/', views.Files.as_view()),
    path('email-verify/', views.VerifyEmail.as_view(), name="email-verify"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
