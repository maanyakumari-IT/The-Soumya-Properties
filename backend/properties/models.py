from django.db import models


class Property(models.Model):

    PROPERTY_TYPE_CHOICES = [
        ("Apartment", "Apartment"),
        ("Villa", "Villa"),
        ("House", "House"),
        ("Commercial", "Commercial"),
        ("Land", "Land"),
    ]

    STATUS_CHOICES = [
        ("Buy", "Buy"),
        ("Rent", "Rent"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()

    price = models.DecimalField(max_digits=12, decimal_places=2)

    location = models.CharField(max_length=255)

    property_type = models.CharField(
        max_length=20,
        choices=PROPERTY_TYPE_CHOICES
    )

    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES
    )

    bedrooms = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField()

    area = models.PositiveIntegerField(
        help_text="Area in Sq. Ft."
    )

    # Main image (card/listing image)
    image = models.ImageField(
        upload_to="properties/",
        blank=True,
        null=True
    )

    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class PropertyImage(models.Model):

    property = models.ForeignKey(
        Property,
        related_name="images",
        on_delete=models.CASCADE
    )

    image = models.ImageField(
        upload_to="property_gallery/"
    )


    def __str__(self):
        return self.property.title