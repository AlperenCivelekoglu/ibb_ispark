from rest_framework import serializers
from parkapp.models import ParkingSpot
from rest_framework_gis.serializers import GeoFeatureModelSerializer

class ParkingSpotSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = ParkingSpot
        geo_field = "geom"
        fields = '__all__'

