from django.db import models
from users import models as user_models

# from categories import models as category_models
from taggit.managers import TaggableManager

# Create your models here.
class Question(models.Model):
    title = models.CharField(max_length=20)
    content = models.TextField()
    user = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    # categories = models.ManyToManyField(category_models.Category, null=True)
    tags = TaggableManager()

    def __str__(self):
        return self.title
