from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'categories/$', views.categories, name='categories'),
    url(r'posts/$', views.posts),
    url(r'post/(?P<post_id>[0-9]+)/$', views.post), 
]