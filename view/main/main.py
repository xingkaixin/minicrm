#!/usr/bin/python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, \
    make_response, jsonify, redirect
from app import celery
from module.task.task import TaskLine as TaskLineModule, Task as TaskModule
import arrow

main = Blueprint('main', __name__)


def getCurTimestamp():
    utc = arrow.utcnow().to('local')
    return utc.timestamp


def getMoment(timestamp):
    u = arrow.get(timestamp)
    return u.humanize(locale='zh')


@main.route('/')
def index():
    return render_template("./main/index.html")


@main.route('/email', methods=['POST'])
def sent_emails():
    emails = request.json['email']
    task = TaskModule()
    task.task_type = 2
    task.create_dt = getCurTimestamp()
    task.update_dt = getCurTimestamp()
    task.status = 'PENDING'
    task.req_num = len(emails)
    task.fail_num = 0
    task.succ_num = 0
    task.save
    for email in emails:
        name = email['name']
        mail = email['mail']
        asynctask = sent_email.apply_async(
            args=[mail, name], countdown=60)
        tl = TaskLineModule()
        tl.task_id = asynctask.id
        tl.pid = task.id
        tl.task_desc1 = mail
        tl.task_desc2 = name
        tl.task_type = 2
        tl.create_dt = getCurTimestamp()
        tl.update_dt = getCurTimestamp()
        tl.status = 'PENDING'
        tl.req_num = 1
        tl.save
    return make_response(jsonify({'messages': 'ok', 'status': 'succ'}), 202)


@celery.task
def sent_email(email, name):
    _sendmail(email, name)


@main.route('/tasks')
def get_tasks():
    tasks = TaskModule.query.order_by(TaskModule.create_dt.desc()).all()
    return make_response(jsonify({'message': 'ok', 'tasks': [t.to_json for t in tasks], 'status': 'succ'}), 201)


@main.route('/tasks/check')
def check_tasks():
    task_status_update()
    return redirect('/tasks')


def task_status_update():
    tasks = TaskModule.query.all()
    if tasks:
        tasks_status()
        for task in tasks:
            tls = TaskLineModule.query.filter_by(pid=task.id).all()
            task.succ_num = 0
            task.fail_num = 0
            if tls:
                for tl in tls:
                    if tl.status == 'SUCCESS':
                        task.succ_num += 1
                    elif tl.status == 'FAILURE':
                        task.fail_num += 1
            if task.succ_num + task.fail_num == task.req_num:
                if task.fail_num > 0:
                    task.status = 'FAILURE'
                else:
                    task.status = 'SUCCESS'
            task.save


def tasks_status():
    tls = TaskLineModule.query.all()
    if tls:
        for tl in tls:
            tl.status = task_status(tl.task_id)


def task_status(task_id):
    task = sent_email.AsyncResult(task_id)
    return task.state


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
