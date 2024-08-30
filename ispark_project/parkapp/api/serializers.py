from rest_framework import serializers
from parkapp.models import ParkingSpot

class ParkingSpotSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkingSpot
        fields = '__all__'
