from django.urls import path
from .views import (
    SignupView, 
    LoginView, 
    LogoutView, 
    TestView, 
    GetCSRFTokenView,
)

urlpatterns = [
    path('signup', SignupView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('test', TestView.as_view()),
    path('get-csrf', GetCSRFTokenView.as_view()),
]