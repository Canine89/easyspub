from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.Category)
class CustomQuestionAdmin(admin.ModelAdmin):
    list_display = ["category"]

