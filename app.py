#!/usr/bin/python
# -*- coding: utf-8 -*-


from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy
from flask_bootstrap import Bootstrap
from celery import Celery
import app

DEBUG = True

SECRET_KEY = 'development key'
SQLALCHEMY_DATABASE_URI = 'sqlite:///server.db'
CELERY_BROKER_URL= 'redis://localhost:6379'
CELERY_RESULT_BACKEND= 'redis://localhost:6379'




app = Flask(__name__)
app.config.from_object(__name__)
db = SQLAlchemy(app)
Bootstrap(app)

# Initialize Celery
celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'])
celery.conf.update(app.config)



from view.main.main import main
app.register_blueprint(main)

@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html', error=error)


@app.errorhandler(401)
def no_permission(error):
    return render_template('error.html', error=error)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
