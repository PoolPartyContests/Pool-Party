from django.urls import path
from .v1.views import TestAPI

urlpatterns = [
    path('v1/testapi', TestAPI.as_view()),
]