from django.core.mail import send_mail
from django.conf import settings

from rest_framework import generics
from .models import Inquiry
from .serializers import InquirySerializer


class InquiryListCreateView(generics.ListCreateAPIView):

    queryset = Inquiry.objects.all().order_by("-created_at")
    serializer_class = InquirySerializer

    def perform_create(self, serializer):

        inquiry = serializer.save()

        subject = f"New Property Inquiry - {inquiry.property.title}"

        message = f"""
A new property inquiry has been received.

Property:
{inquiry.property.title}

Location:
{inquiry.property.location}

Interested For:
{inquiry.interested_for}

----------------------------------

Customer Details

Name:
{inquiry.name}

Email:
{inquiry.email}

Phone:
{inquiry.phone}

----------------------------------

Message:

{inquiry.message}
"""

        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            print("✅ Email sent successfully!")

        except Exception as e:
            print("❌ Email Error:", e)


class InquiryDetailView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer