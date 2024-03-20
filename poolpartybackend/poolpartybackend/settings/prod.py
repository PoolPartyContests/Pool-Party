# set DJANGO_SETTINGS_MODULE=poolpartybackend.settings.local
# export $(sudo cat /opt/elasticbeanstalk/deployment/env | xargs)
import os
from .base import *
from decouple import config

DEBUG = False

# https://aalvarez.me/posts/setting-up-elastic-beanstalk-health-checks-with-a-django-application/
import requests
def get_ec2_instance_ip():
    """
    Try to obtain the IP address of the current EC2 instance in AWS
    """
    # Get the session token
    token_url = "http://169.254.169.254/latest/api/token"
    token_headers = {"X-aws-ec2-metadata-token-ttl-seconds": "21600"}  # 6 hours
    token_response = requests.put(token_url, headers=token_headers)
    token = token_response.text

    # Use the token to get the instance metadata
    ip_url = "http://169.254.169.254/latest/meta-data/local-ipv4"
    ip_headers = {"X-aws-ec2-metadata-token": token}
    try:
        ip_response = requests.get(ip_url, headers=ip_headers)
        return ip_response.text
    except requests.exceptions.ConnectionError:
        return None
    return ip

# Configure SSL
# https://blogs.ainomic.in/securing-your-django-website-on-aws-elastic-beanstalk-a-step-by-step-guide-to-https-implementation-6a8f02f16725

AWS_LOCAL_IP = get_ec2_instance_ip()
ALLOWED_HOSTS = [AWS_LOCAL_IP, 'PoolPartyBackend-env.us-east-2.elasticbeanstalk.com', 'api.poolpartycontests.com']

SECRET_KEY = os.environ.get('SECRET_KEY')
CORS_ORIGIN_WHITELIST = [
    'https://www.poolpartycontests.com',
    'https://www.api.poolpartycontests.com',
    'https://api.poolpartycontests.com',
    'https://poolpartycontests.com',
]
CSRF_TRUSTED_ORIGINS = [
    'https://main.d3lcczce7y35ro.amplifyapp.com',
    'https://www.poolpartycontests.com',
    'https://www.api.poolpartycontests.com',
    'https://api.poolpartycontests.com',
    'https://poolpartycontests.com',
]
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
SESSION_COOKIE_DOMAIN = '.poolpartycontests.com'
CSRF_COOKIE_DOMAIN = '.poolpartycontests.com'
SESSION_COOKIE_SAMESITE = 'None'
CSRF_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
