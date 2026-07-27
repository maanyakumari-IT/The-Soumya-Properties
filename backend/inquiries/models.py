from django.db import models
from properties.models import Property


class Inquiry(models.Model):

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Contacted", "Contacted"),
        ("Visited", "Visited"),
        ("Booked", "Booked"),
        ("Closed", "Closed"),
    ]

    PROPERTY_STATUS = [
        ("Buy", "Buy"),
        ("Rent", "Rent"),
    ]

    name = models.CharField(max_length=100)

    email = models.EmailField()

    phone = models.CharField(max_length=15)

    property = models.ForeignKey(
        Property,
        on_delete=models.CASCADE,
        related_name="inquiries"
    )

    interested_for = models.CharField(
        max_length=10,
        choices=PROPERTY_STATUS
    )

    expected_move_date = models.DateField(
        null=True,
        blank=True
    )

    message = models.TextField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.name} - {self.property.title}"