from django.db import models
from users.models import Participant

# Create your models here.
class Competitor(models.Model):
    SECTOR_CHOICES=[
        ('OP', 'Operations'),
    ]

	Participant = models.OneToOneField(Participant, related_name='comp', on_delete=models.CASCADE)

	# Prerequisite

	# Informasi terbatas kompetitor

	# Informasi prelim
    sector = models.CharField(max_length=31, choices=SECTOR_CHOICES)
    proposal = models.URLField(default="") 

    # Informasi final
    adv_to_finals = models.BooleanField(default=False) # Keterangan lolos final
    team = models.ForeignKey(Team, related_name='members', on_delete=models.CASCADE, null=True)

class Team(models.Model):
	name = models.CharField(max_length=127)