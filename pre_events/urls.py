from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.home, name='pre-events-home'),
    path('signup/', views.PreeventSignup.as_view()),
    path('payment/', views.UploadPayment.as_view()),
    path('twibbon/', views.UploadTwibbon.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
