from . import models
from rest_framework import serializers
from categories import serializers as category_serializers
from users import serializers as user_serializers


class QuestionSerializers(serializers.ModelSerializer):

    # categories = category_serializers.CategorySerializer(many=True)

    class Meta:
        model = models.Question
        fields = ["title", "content"]
