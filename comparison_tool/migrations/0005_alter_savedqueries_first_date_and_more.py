# Generated by Django 4.2.7 on 2023-11-16 20:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comparison_tool', '0004_remove_savedqueries_query_reference_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='savedqueries',
            name='first_date',
            field=models.DateField(default=datetime.datetime(2023, 11, 16, 20, 56, 36, 849374, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='savedqueries',
            name='second_country',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='savedqueries',
            name='second_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
