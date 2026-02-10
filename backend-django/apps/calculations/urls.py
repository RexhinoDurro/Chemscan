from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CalculationViewSet, SavedReactionViewSet

router = DefaultRouter()
router.register('', CalculationViewSet, basename='calculation')
router.register('saved', SavedReactionViewSet, basename='saved-reaction')

urlpatterns = [
    path('', include(router.urls)),
]
