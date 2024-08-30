# parkapp/urls.py
from django.urls import path
from parkapp.api.views import ParkingSpotListCreateAPIView, ParkingSpotDetailAPIView

urlpatterns = [
    path('parkingspot/', ParkingSpotListCreateAPIView.as_view(), name='parking-spot-create'),
    path('parkingspot/<int:pk>', ParkingSpotDetailAPIView.as_view(), name='sarking-spot-detay'),
]
