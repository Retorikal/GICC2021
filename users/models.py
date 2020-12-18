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
    
    nim = models.CharField(max_length=8, null=True)
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

    # Preevent-related fields
    signedup_preevent = models.ManyToManyField(Preevent, related_name='reg_users')

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
        return 'userfiles/{0}/{1}'.format(self.owner.user.username, filename)

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