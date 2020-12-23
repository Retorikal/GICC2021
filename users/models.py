from django.db import models
from django.contrib.auth.models import User
from pre_events.models import Preevent
import random
import string

#untuk email verf
from .serializers import SignupSerializer
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

# General participant information
class Participant(models.Model):

    SECTOR_CHOICES=[
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

    #verifier
    is_verified = models.BooleanField(default = False)
    verify_code = models.CharField(max_length=255, null=True)

    #agreement
    agree_terms = models.BooleanField(default=False)

    # Competition-related fields
    sector = models.CharField(max_length=31, choices=SECTOR_CHOICES, null=True)

    def save(self, *args, **kwargs):
        verify = True;
        verifyList = ('TRF', 'TWB', 'KTM')
        verifCounter = 0

        # Check if items in list are verified
        for f in self.files.all():
            if f.purpose in verifyList:
                verify = verify and f.verified
                verifCounter += 1

        # Check if total of 3 verified document exists, if yes, mark as verified.             
        self.is_verified = verify and (verifCounter == 3)

        super(Participant, self).save(*args, **kwargs)

    def addUser(self, request):
        user = User()
        deserializer = SignupSerializer(user, data = request.data)

        try:
            # Validation
            deserializer.is_valid(raise_exception=True)
            if User.objects.filter(email=deserializer.validated_data["email"]).exists():
                raise Exception("'That email address is already taken.'")
            validate_password(deserializer.validated_data["password"])

            # Save user
            deserializer.save()
            user.set_password(deserializer.validated_data["password"])
            user.save()

            # Save participant
            participant = Participant(user=user)
            participant.save()

            # Send verification Email
            token = RefreshToken.for_user(user).access_token
            current_site = get_current_site(request).domain
            relativeLink = reverse('email-verify')
            absurl = 'http://'+current_site+relativeLink+"?token="+str(token)
            email_body = 'Hi '+user.username + \
            ' Use the link below to verify your email \n' + absurl
            datum = {'email_body': email_body, 'to_email': user.email,
                'email_subject': 'Verify your email'}

            Util.send_email(datum)

            return Response(deserializer.data, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            raise


    def __str__(self):
        return self.user.username

# Validation information ever made by this account: Twibbons, transfers..
class ParticipantFile(models.Model):
    TYPE_CHOICES=[
        ('TRF', 'Transfer'),
        ('TWB', 'Twibbon'),
        ('KTM', 'Kartu Pelajar'),
        ('PRO', 'Proposal'),
    ]

    def savedFileName(self, filename):
        return 'userfiles/{0}/{1}'.format(self.owner.user.username, ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(20)) + filename)

    def __str__(self):
        return self.owner.user.username + "'s " + self.purpose

    def save(self, *args, **kwargs):
        super(ParticipantFile, self).save(*args, **kwargs)
        self.owner.save()

    owner = models.ForeignKey(Participant, related_name='files', on_delete=models.CASCADE)
    event = models.CharField(max_length=255) # Nama pre-event atau "Competition"
    purpose = models.CharField(max_length=31, choices=TYPE_CHOICES)
    file = models.FileField(upload_to=savedFileName, default=None) # Link bukti transfer di file uploader, berupa gambar
    verified = models.BooleanField(default=False) # Pembayaran sudah dikroscek panit