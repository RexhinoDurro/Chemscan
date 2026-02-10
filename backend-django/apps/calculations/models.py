from django.db import models
from django.conf import settings


class Calculation(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='calculations',
    )
    equation = models.CharField(max_length=500)
    balanced_equation = models.CharField(max_length=500, blank=True)
    input_data = models.JSONField(default=dict)
    result_data = models.JSONField(default=dict)
    safety_data = models.JSONField(default=dict, blank=True)
    procedure_data = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'calculations'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.equation} ({self.user.email})"


class SavedReaction(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='saved_reactions',
    )
    name = models.CharField(max_length=200)
    equation = models.CharField(max_length=500)
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'saved_reactions'
        ordering = ['-created_at']

    def __str__(self):
        return self.name
