import pandas as pd
from sqlalchemy import create_engine
from django.conf import settings
import django

# Django projesinin ayarlarını yükleyin
django.setup()

# PostgreSQL bağlantı ayarları
DATABASES = settings.DATABASES['default']
engine = create_engine(f"postgresql://{DATABASES['USER']}:{DATABASES['PASSWORD']}@{DATABASES['HOST']}:{DATABASES['PORT']}/{DATABASES['NAME']}")

# CSV dosyasını URL'den yükleyin
url = 'https://data.ibb.gov.tr/dataset/7456b10e-1128-48f7-82f5-5503d98bfb1b/resource/f4f56e58-5210-4f17-b852-effe356a890c/download/ispark_parking.csv'
df = pd.read_csv(url)

# Longitude ve Latitude ile Point oluşturma
df['geom'] = df.apply(lambda row: f'SRID=4326;POINT({row["LONGITUDE"]} {row["LATITUDE"]})', axis=1)

# Veriyi uygun formatta düzenleme
df = df.rename(columns={
    'PARK_NAME': 'park_name',
    'LOCATION_NAME': 'location_name',
    'PARK_TYPE_ID': 'park_type_id',
    'PARK_TYPE_DESC': 'park_type_desc',
    'CAPACITY_OF_PARK': 'capacity_of_park',
    'WORKING_TIME': 'working_time',
    'COUNTY_NAME': 'county_name',
    'geom': 'geom'
})

# Veriyi PostgreSQL veritabanına yazma
df.to_sql('parkingspot', engine, if_exists='append', index=False)
