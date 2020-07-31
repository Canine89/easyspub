from django.db import models
from django.utils import timezone

class AbstractTimeStampedModel(models.Model):

    """ Abstract Time Stamped Model """
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    # Meta 클래스에 abstarct을 추가하면
    # TimeStampedModel이 데이터베이스에 등록되지 않도록 만들어 준다.
    class Meta:
        abstract = True