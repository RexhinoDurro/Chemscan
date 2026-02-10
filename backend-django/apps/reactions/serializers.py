from rest_framework import serializers
from .models import ReactionLibrary


class ReactionLibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = ReactionLibrary
        fields = ['id', 'name', 'equation', 'category', 'description', 'difficulty']
