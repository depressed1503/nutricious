from django.urls import path
from .views import *


urlpatterns = [
    path("login/", LoginView.as_view()),
    path("logout/", LogoutView.as_view()),
    path("csrf/", CSRFTokenView.as_view()),
    path("user/", CurrentUserView.as_view()),
    path("registration/", RegistrationView.as_view()),
]
