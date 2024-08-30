# parkapp/views.py
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from parkapp.models import ParkingSpot
from parkapp.api.serializers import ParkingSpotSerializer


class ParkingSpotListCreateAPIView(generics.CreateAPIView):

    queryset = ParkingSpot.objects.all()
    serializer_class = ParkingSpotSerializer

    def get(self, request):
        
        parking_spots = ParkingSpot.objects.all()
        serializer = ParkingSpotSerializer(parking_spots, many=True)
        return Response(serializer.data)