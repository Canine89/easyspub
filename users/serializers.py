from . import models
from rest_framework import serializers
from questions import serializers as question_serializers


class UserSerializer(serializers.ModelSerializer):

    question_set = question_serializers.QuestionSerializers(many=True)

    class Meta:
        model = models.User
        fields = ["username", "email", "last_login", "question_set"]

