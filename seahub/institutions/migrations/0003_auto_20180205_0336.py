# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import seahub.base.fields


class Migration(migrations.Migration):

    dependencies = [
        ('institutions', '0002_institutionquota'),
    ]

    operations = [
        migrations.AlterField(
            model_name='institutionadmin',
            name='user',
            field=seahub.base.fields.LowerCaseCharField(max_length=255, db_index=True),
        ),
    ]
