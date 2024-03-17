# set DJANGO_SETTINGS_MODULE=poolpartybackend.settings.prod
import os
from .base import *
from decouple import config

DEBUG = False

SECRET_KEY = os.environ.get('SECRET_KEY')
CORS_ORIGIN_WHITELIST = ['https://main.d3lcczce7y35ro.amplifyapp.com','http://localhost:3000']
CSRF_TRUSTED_ORIGINS = ['https://main.d3lcczce7y35ro.amplifyapp.com','http://localhost:3000']
ALLOWED_HOSTS = ['PoolPartyBackend-env.us-east-2.elasticbeanstalk.com']
if 'RDS_HOSTNAME' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': os.environ['RDS_DB_NAME'],
            'USER': os.environ['RDS_USERNAME'],
            'PASSWORD': os.environ['RDS_PASSWORD'],
            'HOST': os.environ['RDS_HOSTNAME'],
            'PORT': os.environ['RDS_PORT'],
        }
    }
