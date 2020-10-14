from django.db import models
from pre_events.models import Preevent

# Create your models here.

class Participant(models.Model):
    signedup_preevent = models.ForeignKey(Preevent, on_delete=models.CASCADE)
    
    
