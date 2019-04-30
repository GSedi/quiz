from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Post


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')


class PostSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

