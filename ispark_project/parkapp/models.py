from django.db import models
from django.contrib.gis.db import models as geomodels
from django.contrib.gis.geos import Point

class ParkingSpot(geomodels.Model):
    park_name = models.CharField(max_length=255)
    location_name = models.CharField(max_length=255)
    park_type_id = models.CharField(max_length=255)
    park_type_desc = models.CharField(max_length=255)
    capacity_of_park = models.IntegerField()
    working_time = models.CharField(max_length=255)
    county_name = models.CharField(max_length=255)
    LONGITUDE = models.FloatField()
    LATITUDE = models.FloatField()
    geom = geomodels.PointField(null=True, blank=True)


    def __str__(self) -> str:
        return self.park_name