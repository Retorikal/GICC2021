from django.db import models
from django.contrib.auth.models import User
from pre_events.models import Preevent

# General participant information
class Participant(models.Model):
    # Identity
    user = models.OneToOneField(User, related_name='participant', on_delete=models.CASCADE)
    # username
    # first_name: Nama depan
    # last_name: nama lengkap
    # email
    
    nim = models.CharField(max_length=8)
    line = models.CharField(max_length=127)
    uni = models.CharField(max_length=255)
    major = models.CharField(max_length=255)

    # Preevent-related fields
    signedup_preevent = models.ManyToManyField(Preevent, related_name='reg_users')

    def __str__(self):
        return self.user.username

# Validation information ever made by this account: Twibbons, transfers..
class Validation(models.Model):
    TYPE_CHOICES=[
        ('TRF', 'Transfer'),
        ('TWB', 'Twibbon'),
    ]

    owner = models.ForeignKey(Participant, related_name='payments', on_delete=models.CASCADE)
    event = models.CharField(max_length=255) # Nama pre-event atau "Competition"
    purpose = models.CharField(max_length=31, choices=TYPE_CHOICES)
    proof = models.URLField(default="") # Link bukti transfer di file uploader, berupa gambar
    verified = models.BooleanField(default=False) # Pembayaran sudah dikroscek panit
