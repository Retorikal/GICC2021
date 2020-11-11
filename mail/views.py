from django.shortcuts import render

from django.core.mail import send_mail
from django.conf import settings

from django.shortcuts import redirect
# Create your views here.

def email(request):
    subject = 'Thank you for registering to our site'
    message = ' it  means a world to us '
    email_from = settings.EMAIL_HOST_USER
    recipient_list = ['16520055@std.stei.itb.ac.id',]
    send_mail( subject, message, email_from, recipient_list )
    return redirect('https://google.com/')

