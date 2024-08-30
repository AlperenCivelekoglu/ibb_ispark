from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from parkapp.models import ParkingSpot

# Import/Export için resource sınıfı oluşturun
class ParkingSpotResource(resources.ModelResource):
    class Meta:
        model = ParkingSpot

# Admin sınıfını ImportExportModelAdmin ile tanımlayın
@admin.register(ParkingSpot)
class ParkingSpotAdmin(ImportExportModelAdmin):
    resource_class = ParkingSpotResource
    list_display = ('park_name', 'location_name', 'capacity_of_park', 'county_name')
    search_fields = ('park_name', 'location_name', 'county_name')  # Arama yapılacak alanlar
    list_filter = ('county_name', 'park_type_desc')  # Filtreleme yapılacak alanlar


