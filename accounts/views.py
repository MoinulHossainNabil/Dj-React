from rest_framework import status
from .serializers import UserSerializer
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class UserView(APIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def post(self, request, *args, **kwargs):
        post_data = dict(request.data)
        user_name = User.objects.filter(username=post_data['username'])
        if len(user_name) > 0:
            return Response({"response": "username already taken"}, status=status.HTTP_400_BAD_REQUEST)
        email = User.objects.filter(email=post_data['email'])
        if len(email) > 0:
            return Response({"response": "email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        if post_data['password1'] != post_data['password2']:
            return Response({"response": "Passwords don't match"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            username=post_data['username'],
            email=post_data['email'],
            password=post_data['password1']
        )

        new_user = {
            "response": "Registration Successful",
            "id": user.id,
            "username": user.username,
            "email": user.email
        }
        user.set_password(post_data['password1'])
        user.save()
        return Response(new_user, status=status.HTTP_200_OK)
