# Generated by Django 4.2.7 on 2023-11-16 22:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comparison_tool', '0005_alter_savedqueries_first_date_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='savedqueries',
            old_name='querie_quantity',
            new_name='query_quantity',
        ),
        migrations.AlterField(
            model_name='savedqueries',
            name='first_date',
            field=models.DateField(default=datetime.datetime(2023, 11, 16, 22, 32, 45, 284795, tzinfo=datetime.timezone.utc)),
        ),
    ]