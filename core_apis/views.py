from rest_framework.generics import ListAPIView, ListCreateAPIView
from rest_framework.permissions import AllowAny
from .models import Job, Category
from .serializers import JobSerializer, CategorySerializer, PostJobSerializer


class JobListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = JobSerializer
    queryset = Job.objects.all().order_by('-posted_on')


class CategoryListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class JobPostCreateView(ListCreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = PostJobSerializer
    queryset = Job.objects.all()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
