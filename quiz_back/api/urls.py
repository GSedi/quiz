from django.urls import path
from api import views, auth_views

urlpatterns = [
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('posts/<int:pk>/like/', views.put_like),
    path('login/', auth_views.login),
    path('logout/', auth_views.logout)
]