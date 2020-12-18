from django.contrib import admin
from .models import *

# Register your models here.

class ParticipantAdmin(admin.ModelAdmin):	
	list_display = ('user', 'uni', 'major', 'is_verified')

class ParticipantFileAdmin(admin.ModelAdmin):
	list_display = ('__str__', 'owner', 'verified')

	def owner(self, obj):
		return obj.owner.user.username


admin.site.register(Participant, ParticipantAdmin)
admin.site.register(ParticipantFile, ParticipantFileAdmin)