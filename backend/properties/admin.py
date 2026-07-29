from django.contrib import admin
from .models import Property, PropertyImage



@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):

    list_display = [
        "title",
        "location",
        "price",
        "property_type",
        "status",
    ]

@admin.register(PropertyImage)
class PropertyImageAdmin(admin.ModelAdmin):

    list_display = [
        "id",
        "property",
        "image",
    ]