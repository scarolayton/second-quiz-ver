from django.db import models
# from django.contrib.auth.models import UserManager, AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.

class CustomUser(models.Model):
    username = models.CharField(max_length=150, null=False)
    def __str__(self):
        return self.username
class SavedQueries(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    query_name =  models.CharField(max_length=250)
    query_description = models.TextField()
    first_country = models.CharField(max_length=100, null=False, default='Colombia')
    second_country = models.CharField(max_length=100, null=True, blank=True)
    first_date = models.DateField(null=False, default=timezone.now())
    second_date = models.DateField(null=True,blank=True)
    query_quantity = models.IntegerField(null=False, default=1)

    def __str__(self):
        return self.query_name

class Comments(models.Model):
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    text = models.TextField(null=False)
    saved_query_reference = models.ForeignKey(SavedQueries, on_delete=models.CASCADE)

    def __str__(self):
        return self.text


# class CustomUserManager(UserManager):
#     def create_user(self, username, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', False)
#         extra_fields.setdefault('is_superuser', False)
#         return self._create_user(username, password, **extra_fields)

#     def _create_user(self, username, password, **extra_fields):
#         if not username:
#             raise ValueError('The username field must be set')
#         username = self.normalize_email(username)
#         user = self.model(username=username, **extra_fields)
#         user.set_unusable_password()
#         user.save(using=self._db)
#         return user
#     def _create_super_user(self, email=None, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
#         return self._create_user(email, password, **extra_fields)


# class User(AbstractBaseUser, PermissionsMixin):
#     username = models.CharField(max_length=150, unique=True )
#     email = models.EmailField(blank=True, default='', unique=True, null=True)
#     name = models.CharField(max_length=255, null=True, blank=True, default='')
#     is_active = models.BooleanField(default=True)
#     is_superuser = models.BooleanField(default=False)
#     is_staff = models.BooleanField(default=False)
#     date_joined = models.DateTimeField(default=timezone.now())
#     objects = CustomUserManager()

#     USERNAME_FIELD = 'username'
#     REQUIRED_FIELDS = []
#     class Meta:
#         verbose_name = 'User'
#         verbose_name_plural = 'Users'

#     def get_username(self):
#         return self.username
#     def get_full_name(self):
#         return self.name