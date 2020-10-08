from django import forms
from .models import post
# forms

class postform(forms.ModelForm):
    class Meta:
        model = post
        fields = "__all__"
    first_name = forms.CharField(required=True, max_length=50)
    second_name = forms.CharField(required=True, max_length=50)
    email = forms.EmailField(required=True, max_length=50)
    massage = forms.CharField(required=True, max_length=250)



