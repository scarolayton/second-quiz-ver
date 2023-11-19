from rest_framework import serializers
from .models import  SavedQueries, Comments, CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = '__all__'
    
  
    
class SavedQueriesSerializer(serializers.ModelSerializer):
  class Meta:
    model = SavedQueries
    fields = '__all__'
    depth = 1
class CommentsSerializer(serializers.ModelSerializer):
  author = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all(), source='author.id', write_only=True)
  username = serializers.CharField(source='author.username', read_only=True)
  class Meta:
    model = Comments
    fields = '__all__'
