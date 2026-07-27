from django.contrib import admin
from .models import Inquiry


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "property",
        "interested_for",
        "phone",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "interested_for",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "phone",
    )