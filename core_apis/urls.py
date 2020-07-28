from django.urls import path, include
from .views import (JobListView, CategoryListView, JobPostCreateView,
                    SingleJobView, FilterByCategoryView, SearchByView)

urlpatterns = [
    path('list_job/',
         JobListView.as_view(), name="job_list"),
    path('list_category/',
         CategoryListView.as_view(), name="category_list"),
    path('post_job/',
         JobPostCreateView.as_view(), name='post_job'),
    path('view_single_job/<int:pk>/',
         SingleJobView.as_view(), name="single_job"),
    path('filter_jobs_by_category/<int:category_id>/',
         FilterByCategoryView.as_view(), name="category_filter"),
    path('search_by_key/<key>/', SearchByView.as_view(), name="search"),
]
