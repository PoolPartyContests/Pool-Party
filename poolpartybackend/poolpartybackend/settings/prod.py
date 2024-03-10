# set DJANGO_SETTINGS_MODULE=poolpartybackend.settings.prod

from .base import *
from decouple import config

DEBUG = False

SECRET_KEY = os.environ.get('SECRET_KEY')
CORS_ORIGIN_WHITELIST = ['https://main.d3lcczce7y35ro.amplifyapp.com']
CSRF_TRUSTED_ORIGINS = ['https://main.d3lcczce7y35ro.amplifyapp.com']
ALLOWED_HOSTS = ['*']