# Generated by Django 5.1.1 on 2025-03-25 11:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_meal_mealtemplate'),
    ]

    operations = [
        migrations.AddField(
            model_name='meal',
            name='datetime',
            field=models.DateTimeField(auto_created=True, default=datetime.datetime(2025, 3, 25, 11, 45, 12, 714476, tzinfo=datetime.timezone.utc), verbose_name='Дата-время'),
            preserve_default=False,
        ),
    ]
