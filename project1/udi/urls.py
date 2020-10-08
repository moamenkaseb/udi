from django.urls import path
from . import views


urlpatterns = [
    path("" , views.home, name = "home"),
    path("paintenis" , views.paintenis , name = 'paintenis'),
    path("exhibtions" ,views.exhibtions , name ='exhibtions'),
    path("contact/", views.contact , name = 'contact'),
    path("aboutus" , views.about , name = 'about'),
    path("gallary", views.gallary, name='gallary'),
]

