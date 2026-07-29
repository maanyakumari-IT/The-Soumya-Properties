from rest_framework import generics
from .models import Property
from .serializers import PropertySerializer

from django_filters.rest_framework import DjangoFilterBackend
from django_filters import rest_framework as filters

from rest_framework.permissions import AllowAny
from .permissions import IsOwner


# Custom filter for property search
class PropertyFilter(filters.FilterSet):

    location = filters.CharFilter(
        field_name="location",
        lookup_expr="icontains"
    )

    class Meta:
        model = Property
        fields = [
            "property_type",
            "status",
            "location",
            "bedrooms",
        ]


# GET all properties + Search + Filters
class PropertyListView(generics.ListAPIView):

    queryset = Property.objects.all().order_by("-created_at")
    serializer_class = PropertySerializer
    permission_classes = [AllowAny]

    filter_backends = [
        DjangoFilterBackend
    ]

    filterset_class = PropertyFilter



# GET single property
class PropertyDetailView(generics.RetrieveAPIView):

    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [AllowAny]
    authentication_classes=[]

# ADD property
class PropertyCreateView(generics.CreateAPIView):

    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [IsOwner]



# UPDATE property
class PropertyUpdateView(generics.UpdateAPIView):

    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [IsOwner]



# DELETE property
class PropertyDeleteView(generics.DestroyAPIView):

    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [IsOwner]