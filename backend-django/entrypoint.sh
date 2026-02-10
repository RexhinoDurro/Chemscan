#!/bin/bash
set -e

echo "Creating migrations..."
python manage.py makemigrations users calculations reactions --noinput

echo "Running migrations..."
python manage.py migrate --noinput

echo "Seeding reaction library..."
python manage.py seed_reactions --skip-existing

echo "Starting server..."
exec gunicorn config.wsgi:application --bind 0.0.0.0:8000 --workers 3
