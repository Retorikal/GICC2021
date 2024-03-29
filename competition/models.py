from django.db import models
from users.models import Participant
from users.models import ParticipantFile

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=127)

class Competitor(models.Model):
    SECTOR_CHOICES=[
        ('OP', 'Operations'),
        ('MA', 'Marketing'),
        ('EH', 'Dunno'),
    ]

    Participant = models.OneToOneField(Participant, related_name='comp', on_delete=models.CASCADE)

    # Prerequisite
    sector = models.CharField(max_length=31, choices=SECTOR_CHOICES)
    
    # Competition submission
    proposal = models.URLField(default="") 

    # Informasi final
    adv_to_finals = models.BooleanField(default=False) # Keterangan lolos final
    team = models.ForeignKey(Team, related_name='members', on_delete=models.CASCADE, null=True)