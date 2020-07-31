from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers
from rest_framework import status

# facebook login
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView


class ListAllUsers(APIView):
    def get(self, request, format=None):
        all_users = models.User.objects.all()
        serializer = serializers.UserSerializers(all_users, many=True)
        return Response(data=serializer.data)


class UserProfile(APIView):
    def found_user(self, username):
        try:
            user = models.User.objects.get(username=username)
        except models.user.DoesNotExist:
            return None

        return user

    def get(self, request, username, format=None):
        print(username)
        try:
            user = models.User.objects.get(username=username)
            serializer = serializers.UserSerializer(user)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, username, format=None):
        user = request.user  # 요청한 유저의 이름
        found_user = self.found_user(username)  # 찾은 유저의 이름

        if found_user is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if found_user.username != user.username:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            serializer = serializers.UserSerializer(
                found_user, data=request.data, partial=True
            )
            if serializer.is_valid():
                serializer.save()
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
