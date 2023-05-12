from rest_framework import viewsets

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.views.generic.base import TemplateView

from .models import Activity, Location, Photo, Trip

from .serializers import ActivitySerializer, LocationSerializer, PhotoSerializer, TripSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()

class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

class PhotoViewSet(viewsets.ModelViewSet):
    serializer_class = PhotoSerializer
    queryset = Photo.objects.all()

class TripViewSet(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    queryset = Trip.objects.all()

class MyReactView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        return {'context_variable': 'value'}
