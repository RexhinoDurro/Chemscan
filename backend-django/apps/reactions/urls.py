from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReactionLibraryViewSet

router = DefaultRouter()
router.register('', ReactionLibraryViewSet, basename='reaction')

urlpatterns = [
    path('', include(router.urls)),
]
