# Generated by Django 3.1 on 2020-10-06 00:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=60)),
                ('second_name', models.CharField(max_length=60)),
                ('email', models.CharField(max_length=70)),
            ],
        ),
        migrations.CreateModel(
            name='massage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('massage', models.CharField(max_length=250)),
                ('massages', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='udi.user')),
            ],
        ),
    ]