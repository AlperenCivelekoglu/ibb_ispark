from django.urls import path
from . import views

urlpatterns = [
    path('parking-spots/', views.parking_spots_list, name='parking_spots_list'),
]
