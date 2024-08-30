import os
import sys
import pandas as pd
from sqlalchemy import create_engine, text
import django
from django.conf import settings

# Django proje dizinini PYTHONPATH'a ekleyin
sys.path.append('/home/alperen/deneme_ws/ibb_ispark/ispark_project')

# Django ayarlarının bulunduğu modülü belirleme
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ispark_project.settings')

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

# Tabloyu kontrol etme ve oluşturma
with engine.connect() as conn:
    result = conn.execute(text("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='parkapp_parkingspot')"))
    table_exists = result.scalar()

    if not table_exists:
        # Tabloyu oluşturma SQL komutu
        create_table_sql = """
        CREATE TABLE parkapp_parkingspot (
            id SERIAL PRIMARY KEY,
            park_name VARCHAR,
            location_name VARCHAR,
            park_type_id VARCHAR,
            park_type_desc VARCHAR,
            capacity_of_park INTEGER,
            working_time VARCHAR,
            county_name VARCHAR,
            geom GEOMETRY(Point, 4326)
        );
        """
        conn.execute(text(create_table_sql))

# Veriyi PostgreSQL veritabanına yazma
df.to_sql('parkapp_parkingspot', engine, if_exists='append', index=False)
