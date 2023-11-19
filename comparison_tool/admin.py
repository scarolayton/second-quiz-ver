from django.contrib import admin
from .models import  SavedQueries, Comments, CustomUser
# Register your models here

admin.site.register(SavedQueries)
admin.site.register(Comments)
admin.site.register(CustomUser)