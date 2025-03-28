from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    max_proteins_per_day = models.FloatField(default=0, verbose_name='Максимум белков в день')
    max_fats_per_day = models.FloatField(default=0, verbose_name='Максимум жиров в день')
    max_carbs_per_day = models.FloatField(default=0, verbose_name='Максимум углеводов в день')
    max_calories_per_day = models.FloatField(default=0, verbose_name='Максимум калорий в день')

class Meal(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='Пользователь')
    name = models.CharField(max_length=255, default='', verbose_name='Название')
    mass = models.FloatField(default=0, verbose_name='Масса')
    calories_per_100_gramm = models.FloatField(default=0, verbose_name='Калории на 100 грамм блюда')
    proteins = models.FloatField(default=0, verbose_name='Белки')
    fats = models.FloatField(default=0, verbose_name='Жиры')
    carbs = models.FloatField(default=0, verbose_name='Углеводы')
    datetime = models.DateTimeField(auto_now_add=True, verbose_name='Дата-время')

class MealTemplate(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='Пользователь')
    name = models.CharField(max_length=255, default='', verbose_name='Название')
    callories_per_100_gram = models.FloatField(default=0, verbose_name='Калории на 100 грамм блюда')
    proteins = models.FloatField(default=0, verbose_name='Белки')
    fats = models.FloatField(default=0, verbose_name='Жиры')
    carbs = models.FloatField(default=0, verbose_name='Углеводы')
