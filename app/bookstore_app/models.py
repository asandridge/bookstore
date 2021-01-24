# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=30)
    password = forms.CharField(widget=forms.PasswordInput)

class Product(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=50)
    price = models.FloatField(validators=[MinValueValidator(0)])
    author = models.CharField(max_length=30)
    year_published = models.IntegerField(default=2021, validators=[MinValueValidator(0), MaxValueValidator(2021)])
    date_added = models.DateField(auto_now_add=True)
    ratings = models.FloatField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
    GENRE_CHOICES = [
        ('AV', 'Adventure'),
        ('CL', 'Classics'),
        ('GN', 'Graphic Novel'),
        ('MY', 'Mystery'),
        ('FN', 'Fantasy'),
        ('HF', 'Historical Fiction'),
        ('HR', 'Horror'),
        ('LF', 'Literary Fiction'),
        ('RO', 'Romance'),
        ('SF', 'Science Fiction'),
        ('TR', 'Thrillers'),
        ('BG', 'Biographies'),
        ('CO', 'Cooking'),
        ('ES', 'Essays'),
        ('HS', 'History'),
        ('MR', 'Memoir'),
        ('PT', 'Poetry'),
        ('SH', 'Self Help'),
        ('TC', 'True Crime'),
    ]
    genre = models.CharField(
        max_length=2,
        choices=GENRE_CHOICES,
        default='AV',
    )

class Inventory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)])

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_cost = models.FloatField(validators=[MinValueValidator(0)])
    total_items = models.IntegerField(default=1, validators=[MinValueValidator(0), MaxValueValidator(100)])

class OrderStatus(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    STATUS_CHOICES = [
        ('P', 'Processing'),
        ('S', 'Shipped'),
        ('D', 'Delivered'),
        ('C', 'Cancelled'),
        ('R', 'Returned')
    ]
    status = models.CharField(
        max_length=1,
        choices=STATUS_CHOICES,
        default='P',
    )

class OrderDetail(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    unit_price = models.FloatField(validators=[MinValueValidator(0)])
    quantity = models.IntegerField(default=1, validators=[MinValueValidator(0), MaxValueValidator(10)])
