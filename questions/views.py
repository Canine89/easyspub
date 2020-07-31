from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


class ListAllQuestions(APIView):
    def get(self, request, format=None):
        all_questions = models.Question.objects.all()
        serializer = serializers.QuestionSerializers(all_questions, many=True)
        return Response(data=serializer.data)


class SearchQuestions(APIView):
    def get(self, request, format=None):
        hashtags = request.query_params.get("hashtags", None)
        hashtags = hashtags.split(",")

        try:
            find_object_with_hashtags = models.Question.objects.filter(
                tags__name__in=hashtags
            )
            print(find_object_with_hashtags)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_200_OK)
