from rest_framework import viewsets, permissions, filters
from .models import ReactionLibrary
from .serializers import ReactionLibrarySerializer


class ReactionLibraryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ReactionLibrary.objects.all()
    serializer_class = ReactionLibrarySerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'equation', 'category', 'description']
