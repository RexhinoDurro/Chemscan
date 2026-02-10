import requests
from django.conf import settings


def call_chemistry_service(endpoint: str, data: dict) -> dict:
    """Call the chemistry microservice."""
    url = f"{settings.CHEMISTRY_SERVICE_URL}/api/chemistry/{endpoint}"
    response = requests.post(url, json=data, timeout=30)
    response.raise_for_status()
    return response.json()


def call_ai_service(endpoint: str, data: dict) -> dict:
    """Call the AI microservice."""
    url = f"{settings.AI_SERVICE_URL}/api/ai/{endpoint}"
    response = requests.post(url, json=data, timeout=60)
    response.raise_for_status()
    return response.json()
