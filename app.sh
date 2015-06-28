echo $$ > app.pid
python app.py >>app.log 2>>app_err.log
