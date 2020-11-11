from django.shortcuts import render
from django.shortcuts import redirect
from django.core.mail import send_mail
from django.conf import settings

from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.

def email(request):
    subject = 'Thank you for registering to our site'
    message = ' it  means a world to us. [pengetesan send_mail] '
    email_from = settings.EMAIL_HOST_USER
    recipient_list = ['reinardras@gmail.com',]
    send_mail( subject, message, email_from, recipient_list )
    return redirect('https://google.com/')

def send_email(request):
    subject = request.POST.get('subject', 'Thank you for registering to our site')
    message = request.POST.get('message', ' it  means a world to us ')
    from_email = request.POST.get('from_email', '16520055@std.stei.itb.ac.id')
    if subject and message and from_email:
        try:
            send_mail(subject, message, from_email, ['16520055@std.stei.itb.ac.id'])
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return HttpResponseRedirect('https://google.com/')
    else:
        # In reality we'd use a form class
        # to get proper validation errors.
        return HttpResponse('Make sure all fields are entered and valid.')