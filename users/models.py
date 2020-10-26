from django.db import models
from django.contrib.auth.models import User
from pre_events.models import Preevent

# Create your models here.

class Participant(models.Model):
    user = models.OneToOneField(User, related_name='participant', on_delete=models.CASCADE)
    signedup_preevent = models.ManyToManyField(Preevent, related_name='reg_users')
    
    def __str__(self):
        return self.user.username    
