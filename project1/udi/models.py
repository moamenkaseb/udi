from django.db import models

# Create your models here.

class post(models.Model):
    first_name = models.CharField(max_length=60)
    second_name = models.CharField(max_length=60)
    email = models.EmailField()
    massage = models.CharField(max_length=500)

    def __str__(slef):
        return f"first_name:{slef.first_name} ,second_name:{slef.second_name} , email:{slef.email} , masssage:{slef.massage}"
