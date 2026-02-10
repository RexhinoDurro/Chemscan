from django.contrib import admin
from .models import Calculation, SavedReaction


@admin.register(Calculation)
class CalculationAdmin(admin.ModelAdmin):
    list_display = ['equation', 'user', 'created_at']
    list_filter = ['created_at']
    search_fields = ['equation', 'user__email']


@admin.register(SavedReaction)
class SavedReactionAdmin(admin.ModelAdmin):
    list_display = ['name', 'equation', 'user', 'created_at']
    search_fields = ['name', 'equation']
