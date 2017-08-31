from django.views.decorators.csrf import csrf_protect
from django.core import serializers
from django.http import HttpResponse
from django.http import JsonResponse
from .models import Category
from .models import Post

@csrf_protect
def index(request):
  return HttpResponse("Hello, world. You're at the blog index.")

@csrf_protect
def categories(request):
  return JsonResponse(serializers.serialize('json', Category.objects.all()), safe=False)

@csrf_protect
def posts(request):
  recentPosts = Post.objects.order_by('-published').all()
  return JsonResponse(serializers.serialize('json', recentPosts), safe=False)

@csrf_protect
def post(request, post_id):
  post = Post.objects.get(id=post_id)
  return JsonResponse(serializers.serialize('json', [post]), safe=False)
