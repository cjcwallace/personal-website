## Getting on to cPanel

1. Pull the changes into the `/personalsite/` folder using the git helper.
2. Copy `/personalsite/backend/` to `/backend/`
3. Go to Setup Python App => backend => Configuration files => run requirements.txt
4. add `keys.py` to `/backend/`
5. run `python manage.py migrate`