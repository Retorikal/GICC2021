from rest_framework import serializers
from .models import *

class Preevent(models.Model):
    class Meta:
        model = Participant
        ordering = [
        	'user',
        	'nim',
        	'line',
        	'uni',
        	'major',
        	'signedup_preevent',
        	'paid_preevent',
        	'is_competitor',
        	'adv_to_finals',
        	'paid_verified',
        	'paid_competitor',
        	'proposal',
        ]
