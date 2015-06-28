echo $$ > celery.pid
celery worker -A app.celery --loglevel=info >>celery.log 2>>celery_err.log
