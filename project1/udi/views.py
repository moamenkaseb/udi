from django.shortcuts import render ,redirect , HttpResponseRedirect
from .form import postform
from .models import post
# Create your views here.

def home(request):
    return render(request , "pages/home.html")


def paintenis(request):
    return render(request , "pages/paintenis.html")

def exhibtions(request):
    return render(request , "pages/exhibtions.html")


def contact(request):
    if request.method == "POST":
        form = postform(request.POST)
        if form.is_valid():
            try:
                form.save()
                return redirect('contact')
            except:
                return 0
    else:
        return render(request , "pages/contact.html" , {
            'form':postform,
        })

def about(request):
    return render(request , "pages/aboutus.html")

def gallary(request):
    return render(request , "pages/gallary.html")
