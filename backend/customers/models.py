from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from datetime import date

def validate_name(value):
    if not value.isalpha():
        raise ValidationError('first_name and last_name field should only contain alphabetic characters.')

def validate_date_of_birth(value):
    if value >= date.today():
        raise ValidationError('The date of birth must be in the past.')

class Customer(models.Model):
    first_name = models.CharField(max_length=50, validators=[validate_name])
    last_name = models.CharField(max_length=50, validators=[validate_name])
    date_of_birth = models.DateField(validators=[validate_date_of_birth])
    phone_number = models.CharField(
        max_length=10,
        validators=[RegexValidator(regex=r'^\d{10}$', message='Phone number must be exactly 10 digits.')],
        unique=True
    )
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'