from rest_framework import serializers
from .models import Calculation, SavedReaction


class CalculationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calculation
        fields = [
            'id', 'equation', 'balanced_equation', 'input_data',
            'result_data', 'safety_data', 'procedure_data',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class SavedReactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedReaction
        fields = ['id', 'name', 'equation', 'notes', 'created_at']
        read_only_fields = ['id', 'created_at']
