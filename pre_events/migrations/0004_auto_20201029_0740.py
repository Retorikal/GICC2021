# Generated by Django 3.1.1 on 2020-10-29 00:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pre_events', '0003_auto_20201029_0738'),
    ]

    operations = [
        migrations.AlterField(
            model_name='preevent',
            name='twibbon',
            field=models.FileField(null=True, upload_to=''),
        ),
    ]
