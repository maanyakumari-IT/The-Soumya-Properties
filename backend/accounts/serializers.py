from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["username", "email", "password"]

        extra_kwargs = {
            "password": {
                "write_only": True
            }
        }


    def validate_email(self, value):

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "This email is already registered. Please login."
            )

        return value


    def create(self, validated_data):

        return User.objects.create_user(**validated_data)



from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):

    username_field = "email"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields.pop("username", None)


    def validate(self, attrs):

        email = attrs.get("email")
        password = attrs.get("password")

        try:
            user = User.objects.get(
                email=email
            )

        except User.DoesNotExist:
            raise serializers.ValidationError(
                "Invalid email or password."
            )


        if not user.check_password(password):

            raise serializers.ValidationError(
                "Invalid email or password."
            )


        refresh = self.get_token(user)

        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {
            "username": user.username,
            "email": user.email,
            "is_owner": user.is_owner,
        }
}