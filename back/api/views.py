from rest_framework import response, permissions, status, views, generics
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.conf import settings
from .models import *
from .serializers import *


class LoginView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get('login')
        password = request.data.get('password')

        if not username or not password:
            return response.Response(
                {"error": "Please provide both username and password."},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            resp = response.Response({"message": "Login successful.", "user": CustomUserSerializer(user).data}, status=status.HTTP_200_OK)
            resp.set_cookie(
                key="sessionid",
                value=request.session._get_or_create_session_key(),
                httponly=False,
                secure=False,
                samesite='None',
                domain="127.0.0.1" if settings.DEBUG else settings.HOST
            )
            return resp
        else:
            return response.Response(
                {"error": "Invalid username or password."},
                status=status.HTTP_401_UNAUTHORIZED
            )

class LogoutView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        logout(request)
        return response.Response({"message": "Logout successful."}, status=status.HTTP_200_OK)

class CSRFTokenView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        csrf_token = get_token(request)
        resp = response.Response(status=status.HTTP_200_OK)
        resp.set_cookie(
            key='csrftoken',
            value=csrf_token,
            httponly=False,
            secure=False,
            samesite='None',
            domain="127.0.0.1" if settings.DEBUG else settings.HOST
        )
        return resp

class CurrentUserView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        return response.Response(data=CustomUserSerializer(self.request.user).data)

class RegistrationView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class MealListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = MealSerializer

    def get_queryset(self):
        return Meal.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class MealTemplateListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = MealTemplateSerializer

    def get_queryset(self):
        return MealTemplate.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
