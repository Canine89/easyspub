from django.urls import path, include
from django.conf.urls import url
from . import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path("", views.ReactAppView.as_view()),
    path("users/", include("users.urls")),
    path("questions/", include("questions.urls")),
    url(r"^rest-auth/", include("rest_auth.urls")),  # 여기 수정
    url(r"^rest-auth/registration/", include("rest_auth.registration.urls")),  # 여기 수정
    url(r"^accounts/", include("allauth.urls")),
]
