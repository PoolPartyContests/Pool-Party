from django.urls import path
from .v1.views import SignupView, LoginView

urlpatterns = [
    path('v1/signup', SignupView.as_view()),
    path('v1/login', LoginView.as_view()),
]