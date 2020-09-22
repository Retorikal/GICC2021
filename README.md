# GICC2021
Repo buat kerja bareng website GICC 2021

# Landing
Homepage and such. Orang pertama kali masuk website, masuk ke page yang dipegang app Landing. Pokoknya kalo belum perlu login, arahnya kesini.

# Struktur
[MENU BAR]
Home - Pre Events - Competition - Sign in button
        dropdown:   
	StrateGICC   
	GICClass     
	DialoGICC
	MiniCC
------------------------
[SIGN IN PAGE]
email
password
forget password
dont have an account? sign up
------------------------
[USER PROFILE]
Sesuai Django
Guidelines lomba khusus utk participants (locked for non main-event participants)
------------------------
[HOME / LANDING PAGE (SCROLL DOWN)]
Tulisan gede GICC 2021
insert :	GICC is ...
		Objectives
		Why should you join?

Pre Events:	StrateGICC > desc singkat + show the speakers + redirect to its page
		GICClass > desc singkat + show type of classes + redirect to its page
		DialoGICC > desc singkat + show the speakers + redirect to its page
		MiniGICC > desc singkat + redirect to its page

Competition
	deskripsi
	eyecatcher sedikit
	 cth: (you will work to solve X company in the final)
	redirect to its page

Awards for the Competition

Calendar of Events

Supported by
Sponsors
Media partners
------------------------
[PRE EVENT - STRATEGICC]
desc
show speakers and their jobs
event dates
Sign up for this event
	if not using account:
		redirect to login page
	else:
		choose what event to sign up
		show that "You have signed up for ..."

[PRE EVENT - ClassGICC]
desc
show classes and their dates
Sign up for this event
	if not using account:
		redirect to login page
		di login page ada tombol sign up
	else:
		link to panel user
		choose what event to sign up
		show that "You have signed up for ..."

[PRE EVENT - DialoGICC]
desc
show speakers and achievements/jobs
event dates
redirect to IG page

[PRE EVENT - MiniCC]
desc
link for guidelines
timeline
redirect to IG page
------------------------
[COMPETITION]
Competition description		
Who you will solve cases for
Guidelines
Register button
Competition timeline
Awards
------------------------
[FOOTER]
Footer (namanya footer bukan ya?)
	Logo GICC
	Logo Karinov
	Logo KM	
	Contact links (IG, Line, LinkedIn)
	Privacy Policy
	Terms of Service
