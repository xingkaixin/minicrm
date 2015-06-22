#!/usr/bin/python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, make_response, jsonify
from app import celery

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return render_template("./main/index.html")


@main.route('/email', methods=['POST'])
def sent_emails():
    emails = request.json['email']
    for email in emails:
        task = sent_email.apply_async(
            args=[email['mail'], email['name']], countdown=60)
        print task
    return make_response(jsonify({'messages': 'ok', 'status': 'succ'}), 201)


@celery.task
def sent_email(email, name):
    print 'async mail'
    _sendmail(email, name)


import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
import os


def _sendmail(mail, name):
    sender = os.getenv('testmail')
    receiver = mail
    subject = 'CRM test mail for %s' % (name)
    smtpserver = os.getenv('testsmtp')
    username = sender
    password = os.getenv('testmailpw')

    msg = MIMEMultipart()
    msg['Subject'] = Header(subject, 'utf-8')
    msg['From'] = sender
    msg['To'] = receiver
    txt = MIMEText("")
    txt = MIMEText("hi %s ,welcome here" % (name))
    msg.attach(txt)

    smtp = smtplib.SMTP()
    smtp.connect(smtpserver)
    # smtp.ehlo()
    # smtp.starttls()
    # smtp.ehlo()
    smtp.set_debuglevel(1)
    smtp.login(username, password)
    smtp.sendmail(sender, receiver, msg.as_string())
    smtp.quit()
