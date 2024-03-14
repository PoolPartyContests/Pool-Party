# set DJANGO_SETTINGS_MODULE=poolpartybackend.settings.prod
import os
from .base import *
from decouple import config

DEBUG = False

SECRET_KEY = os.environ.get('SECRET_KEY')
CORS_ORIGIN_WHITELIST = ['https://main.d3lcczce7y35ro.amplifyapp.com','http://localhost:3000']
CSRF_TRUSTED_ORIGINS = ['https://main.d3lcczce7y35ro.amplifyapp.com','http://localhost:3000']
ALLOWED_HOSTS = ['*']
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('RDS_DB_NAME'),
        'USER': os.environ.get('RDS_USERNAME'),
        'PASSWORD': os.environ.get('RDS_PASSWORD'),
        'HOST': os.environ.get('RDS_HOSTNAME'),
        'PORT': os.environ.get('RDS_PORT'),
    }
}
