from django.urls import reverse
from django.utils.html import format_html

from django.contrib import admin
from .models import *

# Register your models here.

class ParticipantAdmin(admin.ModelAdmin):	
	list_display = ('user', 'origin', 'contact', 'is_verified', 'email', 'sector', 'files')

	def origin(self, obj):
		return str(obj.uni) + ", " + str(obj.major)

	def contact(self, obj):
		return str(obj.phone_no) + ", " + str(obj.line)

	def email(self, obj):
		return obj.user.email

	def files(self, obj):
		files = obj.files.all().order_by('id')
		link = ""

		for file in files:
			edit_link = reverse("admin:users_participantfile_change", args=[file.id])
			verified = "(V)" if file.verified else ""
			link += format_html('<a href="{}">{}{}</a>, ', edit_link, file.purpose, verified)

		return format_html(link)


class ParticipantFileAdmin(admin.ModelAdmin):
	list_display = ('__str__', 'owner', 'verified')

	def owner(self, obj):
		return obj.owner.user.username


admin.site.register(Participant, ParticipantAdmin)
admin.site.register(ParticipantFile, ParticipantFileAdmin)