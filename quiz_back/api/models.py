from django.db import models
from django.contrib.auth.models import User


class PostManager(models.Manager):
    def for_user(self, user):
        return self.filter(created_by=user)


class Post(models.Model):
    title = models.CharField('Title',max_length=200)
    body = models.TextField('Body')
    like_count = models.IntegerField()
    created_at = models.DateTimeField('Created', auto_now_add=True, null=False)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=1)