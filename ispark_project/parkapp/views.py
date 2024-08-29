from django.shortcuts import render
from .models import ParkingSpot

def parking_spots_list(request):
    spots = ParkingSpot.objects.all()
    return render(request, 'parkapp/parking_spots_list.html', {'spots': spots})
