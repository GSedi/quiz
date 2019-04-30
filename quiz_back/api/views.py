from django.shortcuts import render
from api.models import Post
from rest_framework import generics
from api.serializers import PostSerializer
from rest_framework.permissions import IsAuthenticated, BasePermission
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, )


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, )
    lookup_field = 'pk'


@api_view(['POST'])
def put_like(request, pk):
    try:
        post = Post.objects.all().get(id=pk)
    except Post.DoesNotExist as e:
        return Response({'error': f'{e}'}, status=status.HTTP_404_NOT_FOUND)

    post.like_count = post.like_count + 1
    post.save()
    serializer = PostSerializer(post)
    return Response(serializer.data)