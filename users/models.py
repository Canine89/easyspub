from django.db import models
from questions import models as question_models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    GENDER = (("male", "남자"), ("female", "여자"), ("none", "선택하지 않음"))
    AGE_RANGE = (
        ("10", "10대"),
        ("20", "20대"),
        ("30", "30대"),
        ("40", "40대"),
        ("50", "50대"),
        ("60", "60대"),
        ("70", "70대"),
        ("80", "80대"),
        ("none", "선택하지 않음"),
    )
    EMAIL_OK = (("yes", "수신"), ("no", "수신하지 않음"))

    gender = models.CharField(max_length=32, choices=GENDER, default="none")
    age = models.CharField(max_length=32, choices=AGE_RANGE, default="none")
    it_email_ok = models.CharField(max_length=8, choices=EMAIL_OK, default="no")
    edu_email_ok = models.CharField(max_length=8, choices=EMAIL_OK, default="no")
