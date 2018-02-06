# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import seahub.base.fields
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('message', models.CharField(max_length=512)),
                ('primary', models.BooleanField(default=False, db_index=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserNotification',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('to_user', seahub.base.fields.LowerCaseCharField(max_length=255, db_index=True)),
                ('msg_type', models.CharField(max_length=30, db_index=True)),
                ('detail', models.TextField()),
                ('timestamp', models.DateTimeField(default=datetime.datetime.now)),
                ('seen', models.BooleanField(default=False, verbose_name=b'seen')),
            ],
            options={
                'ordering': ['-timestamp'],
            },
        ),
    ]
