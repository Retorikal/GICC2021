# GICC2021
Repo buat kerja bareng website GICC 2021

# Landing
Homepage and such. Orang pertama kali masuk website, masuk ke page yang dipegang app Landing. Pokoknya kalo belum perlu login, arahnya kesini.

# Struktur
## Menu Bar
Home - Pre Events - Competition - Sign in button

Dropdown pre-events:
* StrateGICC   
* GICClass     
* DialoGICC
* MiniCC

## Sign in Page
* email
* password
* forget password
* dont have an account? sign up

## User Profile
* Sesuai Django
* Guidelines lomba khusus utk participants (locked for non main-event participants)

## Landing
Tulisan gede GICC 2021<br/>
descriptions such as
 * GICC is ...
 * Objectives
 * Why should you join?

Pre Events:
* StrateGICC > desc singkat + show the speakers + redirect to its page<br/>
* GICClass > desc singkat + show type of classes + redirect to its page<br/>
* DialoGICC > desc singkat + show the speakers + redirect to its page
* MiniGICC > desc singkat + redirect to its page

Competition
* deskripsi
* eyecatcher sedikit
* cth: (you will work to solve X company in the final)
* redirect to its page

Awards for the Competition <br/>

Calendar of Events<br/>

Supported by<br/>
Sponsors<br/>
Media partners<br/>

## Pre-event - StrateGICC
desc<br/>
show speakers and their jobs<br/>
event dates<br/>
Sign up for this event<br/>
* if not using an account, redirect to login page
* else:
  * link to user panel
  * choose what event to sign up
  * show that "You have signed up for ..."

## Pre-event - ClassGICC
desc<br/>
show classes and their dates<br/>
Sign up for this event<br/>
* if not using an account, redirect to login page
* else:
  * link to user panel
  * choose what event to sign up
  * show that "You have signed up for ..."

## Pre-event - DialoGICC
desc<br/>
show speakers and achievements/jobs<br/>
event dates<br/>
redirect to IG page<br/>

## Pre-event - MiniCC
desc<br/>
link for guidelines<br/>
timeline<br/>
redirect to IG page<br/>

## Competition
Competition description	<br/>	
Who you will solve cases for<br/>
Guidelines<br/>
Register button<br/>
Competition timeline<br/>
Awards<br/>

## Footer
(namanya footer bukan ya?)
* Logo GICC
* Logo Karinov
* Logo KM	
* Contact links (IG, Line, LinkedIn, CP)
* Privacy Policy
* Terms of Service
