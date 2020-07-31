from django.conf.urls import url
from . import views

urlpatterns = [
    url(regex=r"^all/$", view=views.ListAllQuestions.as_view(), name="all_questions"),
    url(
        regex=r"^search/$",
        view=views.SearchQuestions.as_view(),
        name="search_questions",
    ),
]
