from rest_framework import viewsets
from django.views.generic.base import TemplateView

from .models import Activity, Location, Photo, Trip
from .serializers import ActivitySerializer, LocationSerializer, PhotoSerializer, TripSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()
    http_method_names = ['get']

class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()
    http_method_names = ['get']

class PhotoViewSet(viewsets.ModelViewSet):
    serializer_class = PhotoSerializer
    queryset = Photo.objects.all()
    http_method_names = ['get']

class TripViewSet(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    queryset = Trip.objects.all().order_by('trip_date')
    http_method_names = ['get']

class MyReactView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        return {'context_variable': 'value'}
