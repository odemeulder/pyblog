[program:gunicorn]
command=gunicorn blog1.wsgi --chdir /var/www/pyblog
directory=/var/www/pyblog/
autostart=true
autorestart=true
user=nobody
stderr_logfile=/var/log/blog1.err.log
stdout_logfile=/var/log/blog1.out.log
