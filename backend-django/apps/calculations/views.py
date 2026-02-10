from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import Calculation, SavedReaction
from .serializers import CalculationSerializer, SavedReactionSerializer


class CalculationViewSet(viewsets.ModelViewSet):
    serializer_class = CalculationSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete']

    def get_queryset(self):
        return Calculation.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SavedReactionViewSet(viewsets.ModelViewSet):
    serializer_class = SavedReactionSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'post', 'delete']

    def get_queryset(self):
        return SavedReaction.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
