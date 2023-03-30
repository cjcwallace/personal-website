from django.db import models

class Photo(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='photos')
