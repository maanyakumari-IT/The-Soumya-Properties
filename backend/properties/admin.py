from django.contrib import admin
from .models import Property


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "property_type",
        "status",
        "price",
        "location",
        "created_at",
        "updated_at",
        "is_available",
    )

    list_filter = (
        "property_type",
        "status",
        "is_available",
    )

    search_fields = (
        "title",
        "location",
    )

    ordering = ("-created_at",)