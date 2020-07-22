from django.db import models
from django.contrib.auth.models import User


class Job(models.Model):
    job_title = models.CharField(max_length=40)
    company_name = models.CharField(max_length=80)
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE)
    job_description = models.TextField(blank=True, null=True, default="N/A")
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    experience = models.IntegerField()
    address = models.CharField(max_length=100, blank=True, null=True, default="N/A")
    state = models.CharField(max_length=20)
    posted_on = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField()

    def __str__(self):
        return self.job_title


class Category(models.Model):
    job_category = models.CharField(max_length=100)

    def __str__(self):
        return self.job_category
