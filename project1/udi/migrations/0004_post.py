# Generated by Django 3.1 on 2020-10-07 05:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('udi', '0003_delete_massage'),
    ]

    operations = [
        migrations.CreateModel(
            name='post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=60)),
                ('second_name', models.CharField(max_length=60)),
                ('email', models.EmailField(max_length=254)),
                ('massage', models.CharField(max_length=500)),
            ],
        ),
    ]