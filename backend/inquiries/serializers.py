from rest_framework import serializers
from .models import Inquiry


class InquirySerializer(serializers.ModelSerializer):

    property_title = serializers.ReadOnlyField(source="property.title")

    class Meta:
        model = Inquiry
        fields = "__all__"