from django.contrib import admin
from .models import ReactionLibrary


@admin.register(ReactionLibrary)
class ReactionLibraryAdmin(admin.ModelAdmin):
    list_display = ['name', 'equation', 'category', 'difficulty']
    list_filter = ['category', 'difficulty']
    search_fields = ['name', 'equation']
