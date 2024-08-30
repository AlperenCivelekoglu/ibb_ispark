from rest_framework import serializers
from parkapp.models import ParkingSpot
from rest_framework_gis.serializers import GeoFeatureModelSerializer

class ParkingSpotSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = ParkingSpot
        geo_field = "geom"  # GeoDjango'daki PointField ile eşleşmeli
        fields = '__all__'
        # fields = ('id', 'park_name', 'location_name', 'park_type_id', 'park_type_desc',
        #          'capacity_of_park', 'working_time', 'county_name')
