from django.db import models
from django.utils import timezone
from tinymce.models import HTMLField
from tinymce.widgets import TinyMCE

class Category(models.Model):
  name = models.CharField(max_length=128)
  short_name = models.CharField(max_length=50)
  description = models.CharField(max_length=255)

  def __str__(self):
    return self.name

class Post(models.Model):
  POST_STATUSES = (  
    (1, 'draft'),
    (2, 'published'),
    (3, 'deleted')
  )
  categories= models.ManyToManyField(Category)   
  title     = models.CharField(max_length=255)
  seo_title = models.CharField(max_length=128)
  content   = models.TextField()
  status    = models.IntegerField(choices=POST_STATUSES, default=1)
  created   = models.DateField(editable=False)
  updated   = models.DateField(editable=False)
  published = models.DateField(editable=False)
  
  def __init__(self, *args, **kwargs):
    super(Post, self).__init__(*args, **kwargs)
    self.__original_status = self.status

  def __str__(self):
    return self.title
  
  def save(self, *args, **kwargs):
    ''' On save, update timestamps '''
    if not self.id:
      self.created = timezone.now()
    if not self.id or (self.status != self.__original_status and self.status == 2):
      self.published = timezone.now()

    self.updated = timezone.now()
    return super(Post, self).save(*args, **kwargs)

