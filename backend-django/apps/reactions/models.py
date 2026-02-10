from django.db import models


class ReactionLibrary(models.Model):
    CATEGORY_CHOICES = [
        ('acid_base', 'Acid-Base'),
        ('redox', 'Redox'),
        ('precipitation', 'Precipitation'),
        ('combustion', 'Combustion'),
        ('synthesis', 'Synthesis'),
        ('decomposition', 'Decomposition'),
        ('single_replacement', 'Single Replacement'),
        ('double_replacement', 'Double Replacement'),
    ]
    DIFFICULTY_CHOICES = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]

    name = models.CharField(max_length=200)
    equation = models.CharField(max_length=500)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    description = models.TextField(blank=True)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES, default='medium')

    class Meta:
        db_table = 'reaction_library'
        verbose_name_plural = 'Reaction Library'
        ordering = ['category', 'difficulty', 'name']

    def __str__(self):
        return self.name
