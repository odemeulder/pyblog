# pyblog
A proof of concept blog written written in Python with Django, Postgres backend and Angular 4 front end.

Note: This is not production ready code, it is merely meant to try out some ideas.

You can view the finished product at http://olivier.demeulder.us

## run in production

- build the frontend, see read me in 'front-end-src'
- ngnix needs to run, configuration file in `/ngnix/sites-available/default'
- supervisor to run the django app, using gunicorn (needs gunicorn installed), configuration file in `/supervisor/` folder.
