from django.urls import path
from . import views

urlpatterns = [
    path('task_lists/', views.task_list),
    path('task_lists/<int:num>/', views.task_list_num),
    path('task_lists/<int:num>/tasks/', views.task_list_num_task)
]