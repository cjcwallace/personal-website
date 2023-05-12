from rest_framework import routers
from django.urls import include, path

from . import views

router = routers.DefaultRouter()
router.register(r'activities', views.ActivityViewSet)
router.register(r'locations', views.LocationViewSet)
router.register(r'photos', views.PhotoViewSet)
router.register(r'trips', views.TripViewSet)

urlpatterns = [
    # path('', views.index, name='index'),
    # path('<int:photo_id>/', views.detail, name='detail'),
    path('', include(router.urls)),
]
