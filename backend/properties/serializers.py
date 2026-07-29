from rest_framework import serializers
from .models import Property, PropertyImage


class PropertyImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = PropertyImage
        fields = [
            "id",
            "image",
        ]

class PropertySerializer(serializers.ModelSerializer):

    images = PropertyImageSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Property
        fields = [
            "id",
            "title",
            "description",
            "price",
            "location",
            "property_type",
            "status",
            "bedrooms",
            "bathrooms",
            "area",
            "image",
            "images",
            "is_available",
            "created_at",
            "updated_at",
        ]

    def create(self, validated_data):

        request = self.context["request"]

        property = Property.objects.create(**validated_data)

        for img in request.FILES.getlist("images"):
            PropertyImage.objects.create(
                property=property,
                image=img
            )

        return property


    def update(self, instance, validated_data):

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        request = self.context["request"]

        images = request.FILES.getlist("images")

        if images:

            for img in images:

                PropertyImage.objects.create(
                    property=instance,
                    image=img
                )

        return instance