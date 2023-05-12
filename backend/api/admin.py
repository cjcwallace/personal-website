from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import Activity, Location, Photo, Trip

admin.site.register(Activity)
admin.site.register(Location)
admin.site.register(Photo)
admin.site.register(Trip)
