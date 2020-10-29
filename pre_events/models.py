from django.db import models

# Create your models here.

class Preevent(models.Model):
    name = models.TextField()

    # pembayaran, screenshoot twibbon, url ig twibbon
    payment = models.FileField(null=True)
    twibbon = models.FileField(null=True)
    twibbon_post = models.TextField(null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
