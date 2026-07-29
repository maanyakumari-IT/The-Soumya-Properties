from django.core.mail import send_mail
from django.conf import settings

from rest_framework import generics

from .models import Contact
from .serializers import ContactSerializer


class ContactCreateView(generics.CreateAPIView):

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):

        contact = serializer.save()

        subject = f"New Contact Form - {contact.subject}"

        message = f"""
A new contact message has been received.

Name:
{contact.name}

Email:
{contact.email}

Phone:
{contact.phone}

--------------------------------

Subject:
{contact.subject}

--------------------------------

Message:

{contact.message}
"""

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
        )