## Getting on to cPanel

1. Pull the changes into the `/personalsite/` folder using the git helper.
2. Copy `/personalsite/backend/` to `/backend/`
3. Go to Setup Python App => backend => Configuration files => run requirements.txt
4. add `keys.py` to `/backend/`
5. run `python manage.py migrate`
6. run `python manage.py collectstatic`


## Debugging Python App

1.  cPanel -> File Admin -> /home/user/app/stderr.log -> select watch up in the right corner
    1. this is the standard output for Python server.

## Common Issues

1. `The resource from “https://cameronwallace.net/static/index-bundle.js” was blocked due to MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff).`
    1. 