from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.Question)
class CustomQuestionAdmin(admin.ModelAdmin):
    list_display = ("title", "content")
