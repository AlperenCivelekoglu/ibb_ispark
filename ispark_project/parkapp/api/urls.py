# parkapp/urls.py
from django.urls import path
from parkapp.api.views import ParkingSpotListCreateAPIView

urlpatterns = [
    path('api/parkingspot/', ParkingSpotListCreateAPIView.as_view(), name='parking-spot-create'),
]
