echo 'You try to' $1 'server'

start="start"
stop="stop"

if [ $1 == $start ]
then
	echo 'Begin to start server'
	sh redis.sh  &
	sh celery.sh  &
	sh app.sh &
	echo 'start server success'
fi


if [ $1 == $stop ]
then
	echo 'Try to stop server'
	pkill redis
	pkill python
	echo 'Stop Server success'
fi

