from rest_framework import serializers
from .models import Activity, Location, Photo, Trip

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'name', 'activity_date', 'location']
        read_only_fields = ['id', 'name', 'activity_date', 'location']

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'continent', 'country', 'state', 'city']
        read_only_fields = ['id', 'continent', 'country', 'state', 'city']

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'name', 'image', 'pub_date', 'shot_date', 'trip', 'activity', 'category']
        read_only_fields = ['id', 'name', 'image', 'pub_date', 'shot_date', 'trip', 'activity', 'category']

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ['id', 'name', 'trip_date', 'location']
        read_only_fields = ['id', 'name', 'trip_date', 'location']
