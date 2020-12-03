# Generated by Django 3.0.7 on 2020-12-03 05:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import users.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pre_events', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nim', models.CharField(max_length=8, null=True)),
                ('uni', models.CharField(max_length=255, null=True)),
                ('major', models.CharField(max_length=255, null=True)),
                ('phone_no', models.CharField(max_length=31, null=True)),
                ('line', models.CharField(max_length=127, null=True)),
                ('is_verified', models.BooleanField(null=True)),
                ('verify_code', models.CharField(max_length=255, null=True)),
                ('signedup_preevent', models.ManyToManyField(related_name='reg_users', to='pre_events.Preevent')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='participant', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ParticipantFiles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=255)),
                ('purpose', models.CharField(choices=[('TRF', 'Transfer'), ('TWB', 'Twibbon'), ('KTM', 'Kartu Pelajar'), ('PRO', 'Proposal')], max_length=31)),
                ('file', models.FileField(default=None, upload_to=users.models.ParticipantFiles.savedFileName)),
                ('verified', models.BooleanField(default=False)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='users.Participant')),
            ],
        ),
    ]
