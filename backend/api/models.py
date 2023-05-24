from django.db import models
from django.utils.translation import gettext_lazy as _

from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.conf import settings
from zipfile import ZipFile

from io import BytesIO
from PIL import Image
import os

class Category(models.TextChoices):
    NATURE = 'NA', _('Nature')
    CITY = 'CI', _('City')
    PEOPLE = 'PE', _('People')

class Location(models.Model):
    continent = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        ret = ""
        if self.city:
            ret += f'{self.city}, '
        if self.state:
            ret += f'{self.state}, '
        if self.country:
            ret += f'{self.country}, '
        if self.city:
            ret += f'{self.continent}'
        return ret

class Activity(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    activity_date = models.DateTimeField('date of activity', null=True, blank=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Activities'

class Trip(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    trip_date = models.DateTimeField('date of trip', null=True, blank=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class BaseGallery(models.Model):
    zip_import = models.FileField(blank=True, upload_to='photos/')

    def save(self, delete_zip_import=True, *args, **kwargs):
        """
        If a zip file is uploaded, extract any images from it and add
        them to the gallery, before removing the zip file.
        """
        super(BaseGallery, self).save(*args, **kwargs)
        if self.zip_import:
            zip_file = ZipFile(self.zip_import)
            for name in zip_file.namelist():
                data = zip_file.read(name)
                try:
                    image = Image.open(BytesIO(data))
                    image.load()
                    image = Image.open(BytesIO(data))
                    image.verify()
                except ImportError:
                    pass
                except:
                    continue
                name = os.path.split(name)[1]
                # You now have an image which you can save
                # path = os.path.join(settings.MEDIA_ROOT, "photos", native(str(name, errors="ignore")))
                path = os.path.join(settings.MEDIA_ROOT, "photos")
                saved_path = default_storage.save(path, ContentFile(data))

                self.images.create(file=saved_path)
            if delete_zip_import:
                zip_file.close()
                self.zip_import.delete(save=True)

class Photo(models.Model):
    gallery = models.ForeignKey(blank=True, null=True, to=BaseGallery, related_name="images", on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='photos/')
    pub_date = models.DateTimeField('date published', null=True, blank=True)
    shot_date = models.DateTimeField('date shot', null=True, blank=True)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, null=True, blank=True)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE, null=True, blank=True)
    category = models.CharField(max_length=2, choices=Category.choices, default=Category.NATURE)

    def __str__(self):
        return self.name
