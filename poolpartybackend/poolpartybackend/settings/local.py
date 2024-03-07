# set DJANGO_SETTINGS_MODULE=poolpartybackend.settings.dev

from .base import *
from decouple import config

DEBUG = True

SECRET_KEY = config('SECRET_KEY')
CORS_ORIGIN_WHITELIST = ['http://localhost:3000']
CSRF_TRUSTED_ORIGINS = ['http://localhost:3000']

DATABASES =  { 
    "default": 
        { 
            "ENGINE": "django.db.backends.sqlite3", 
            "NAME": BASE_DIR / "db.sqlite3", 
    }
}
