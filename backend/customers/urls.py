from django.urls import path 
from .views import create_customer, list_customers, customer_detail,register_user


urlpatterns = [
    path('customers/', list_customers, name='customer-list'),
    path('customers/new', create_customer, name='customer-create'),
    path('customers/<int:pk>/', customer_detail, name='customer-detail'),
    path('register/', register_user, name='register_user'),
]
