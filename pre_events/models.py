from django.db import models

# Create your models here.

class Preevent(models.Model):
    name = models.TextField(default="")
    desc = models.TextField(default="")

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
