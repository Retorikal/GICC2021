from django.shortcuts import render
from django.http import HttpResponse
from django.core.files.storage import FileSystemStorage

def home(request):
    return render(request, "landing/home.html")

def upload(request):
    context = {}
    if request.method == "POST":
        uploaded_file = request.FILES['document']
        fs = FileSystemStorage()
        name = fs.save(uploaded_file.name, uploaded_file)
        context['url'] = fs.url(name)
        context['name'] = name
    return render(request, "landing/upload.html", context)
