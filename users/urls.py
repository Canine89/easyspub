from django.conf.urls import url
from . import views

urlpatterns = [
    # url(regex=r"^all/$", view=views.ListAllUsers.as_view(), name="all_users")
    url(
        regex=r"^(?P<username>\w+)/$",
        view=views.UserProfile.as_view(),
        name="user_profile",
    ),
    url(
        regex=r"^rest-auth/facebook/$",
        view=views.FacebookLogin.as_view(),
        name="facebook_login",
    ),
]
