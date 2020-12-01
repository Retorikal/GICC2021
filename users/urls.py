from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('signup/', views.Signup.as_view()),
    path('files/', views.Files.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
