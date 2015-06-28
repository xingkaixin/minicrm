echo $$ > redis.pid
redis-server /usr/local/etc/redis.conf >>redis.log 2>>redis_err.log
