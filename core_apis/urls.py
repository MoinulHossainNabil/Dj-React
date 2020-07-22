from django.urls import path, include
from .views import JobListView, CategoryListView, JobPostCreateView

urlpatterns = [
    path('list_job/', JobListView.as_view(), name="job_list"),
    path('list_category/', CategoryListView.as_view(), name="category_list"),
    path('post_job/', JobPostCreateView.as_view(), name='post_job'),

]
