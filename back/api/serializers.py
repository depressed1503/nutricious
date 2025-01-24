from rest_framework import serializers
from .models import *

class CustomUserSerializer(serializers.ModelSerializer):
	user_permissions = serializers.SerializerMethodField()
	groups = serializers.SerializerMethodField()

	def get_user_permissions(self, obj):
		return obj.get_all_permissions()
	
	def get_groups(self, obj):
		return list(obj.groups.values_list('name',flat = True))
	
	def create(self, validated_data):
		user = CustomUser.objects.create_user(**validated_data)
		return user

	class Meta:
		model = CustomUser
		fields = '__all__'
