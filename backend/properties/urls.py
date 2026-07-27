from django.urls import path
from .views import (
    PropertyListView,
    PropertyDetailView,
    PropertyCreateView,
    PropertyUpdateView,
    PropertyDeleteView,
)

urlpatterns = [
    path("", PropertyListView.as_view(), name="property-list"),
    path("<int:pk>/", PropertyDetailView.as_view(), name="property-detail"),
    path("create/", PropertyCreateView.as_view(), name="property-create"),
    path("update/<int:pk>/", PropertyUpdateView.as_view(), name="property-update"),
    path("delete/<int:pk>/", PropertyDeleteView.as_view(), name="property-delete"),
]