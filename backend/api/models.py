from django.db import models
from django.utils.translation import gettext_lazy as _

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

class Photo(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='photos/')
    pub_date = models.DateTimeField('date published', null=True, blank=True)
    shot_date = models.DateTimeField('date shot', null=True, blank=True)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, null=True, blank=True)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE, null=True, blank=True)
    category = models.CharField(max_length=2, choices=Category.choices, default=Category.NATURE)

    def __str__(self):
        return self.name
