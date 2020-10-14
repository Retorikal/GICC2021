from django.db import models

# Create your models here.

class Preevent(models.Model):
    name = models.TextField()

    class Meta:
        ordering = ['name']
