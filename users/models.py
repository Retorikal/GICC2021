from django.db import models
from django.contrib.auth.models import User
from pre_events.models import Preevent
import random
import string

#untuk email verf
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

# General participant information
class Participant(models.Model):

    SECTOR_CHOICES=[
        ('NO', 'Has not chosen yet'),
        ('OP', 'Operations'),
        ('MA', 'Marketing'),
        ('EH', 'Enviromental Health Safety'),
    ]

    # Identity
    user = models.OneToOneField(User, related_name='participant', on_delete=models.CASCADE)
    # username
    # first_name: Nama depan
    # last_name: nama lengkap
    
    uni = models.CharField(max_length=255, null=True)
    major = models.CharField(max_length=255, null=True)

    # Contact info + email on user model
    phone_no = models.CharField(max_length=31, null=True)
    line = models.CharField(max_length=127, null=True)

    # File Verifier
    is_verified = models.BooleanField(default = False)

    # Email Verifier
    mail_verified = models.BooleanField(default = False)
    verify_code = models.CharField(max_length=255, null=True)

    #agreement
    agree_terms = models.BooleanField(default=False)

    # Competition-related fields
    sector = models.CharField(max_length=2, choices=SECTOR_CHOICES, default='NO')

    def save(self, *args, **kwargs):
        verify = True
        verifyList = ('TRF', 'TWB', 'KTM')
        verifCounter = 0

        # Check if items in list are verified
        for f in self.files.all():
            if f.purpose in verifyList:
                verify = verify and f.verified
                verifCounter += 1

        # Check if total of 3 verified document exists, if yes, mark as verified, and send a notification mail.           
        tmp_is_verified = verify and (verifCounter == 3)
        if (not self.is_verified and tmp_is_verified):
            self.is_verified = True
            self.postFileMail()

        super(Participant, self).save(*args, **kwargs)

    def mailContactInfo(self):
        return ("\n\n"
            "Instagram: @ganesha.icc\n"
            "E-mail: ganeshai@ganeshaicc.my.id"
            )

    def postVerifMail(self, dummy=False):
        # Send verification Email
        token = RefreshToken.for_user(self.user).access_token
        relativeLink = reverse('email-verify')
        absurl = "http://ganeshaicc.my.id"+relativeLink+"?token="+str(token) #hardcode current site
        email_body = 'Hi '+ self.user.first_name + ',\nPlease use the link below to verify your email.\n' + absurl + "\nThe link expires in 10 minutes." + self.mailContactInfo()

        datum = {
            'email_body': email_body, 
            'to_email': self.user.email,
            'email_subject': 'Verify your email'
        }

        if(dummy):
            print(email_body)
        else:
            Util.send_email(datum)

    def postFileMail(self, dummy=False):
        # Send verification Email
        email_body = ("Hi " + self.user.first_name + ", this e-mail is sent to notify you that all your pre-requisite files has been verified."
            " Thank you for completing the registration proccess.") + self.mailContactInfo()

        datum = {
            'email_body': email_body, 
            'to_email': self.user.email,
            'email_subject': 'Your submitted files has been verified.'
        }

        if(dummy):
            print(email_body)
        else:
            Util.send_email(datum)

    def __str__(self):
        return self.user.username

# Validation information ever made by this account: Twibbons, transfers..
class ParticipantFile(models.Model):
    TYPE_CHOICES=[
        ('TRF', 'Transfer'),
        ('TWB', 'Twibbon'),
        ('KTM', 'Kartu Pelajar'),
        ('PRO', 'Proposal'),
        ('STA', 'Statement of Originality'),
    ]

    def savedFileName(self, filename):
        return 'userfiles/{0}/{1}'.format(self.owner.user.username, ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(20)) + filename)

    def __str__(self):
        return self.owner.user.username + "'s " + self.purpose

    def save(self, *args, **kwargs):
        super(ParticipantFile, self).save(*args, **kwargs)
        self.owner.save()

    owner = models.ForeignKey(Participant, related_name='files', on_delete=models.CASCADE)
    purpose = models.CharField(max_length=31, choices=TYPE_CHOICES)
    file = models.FileField(upload_to=savedFileName, default=None) # Link bukti transfer di file uploader, berupa gambar
    verified = models.BooleanField(default=False) # Pembayaran sudah dikroscek panit
    lastmod = models.DateTimeField(auto_now=True)
