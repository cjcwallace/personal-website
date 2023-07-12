# website
I've been working on creating a personal site. I mostly want to be able to document some of the different trips I've been on and photos I've taken.
I've also thought of using it as a place to store some relevant info/docs for my career like resumes, letters of rec, etc.

I wanted to write the site from scratch using Django/DRF on the backend and React on the frontend to expand my skillset and keep myself working on a project that uses relevant, modern technologies.

See what I've been working on at https://cameronwallace.net

## Frontend
npm install
npm run dev -> builds index-bundle

## Backend
Install requirements
`pip install -m ./requirements`

Start the backend
`python manage.py runserver`


### Api Generation for OpenAPI
### NOTE this step seems overkill and I've since moved away from using OpenAPI
generate API Client based on `schema.yml` file
`openapi-generator-cli generate -i ../backend/schema.yml -g typescript-fetch -o ./src/api-client/`
or
`openapi-generator-cli generate -i http://127.0.0.1:8000/api/schema/ -g typescript-fetch -o ./src/api-client/`

generate api schema
`python manage.py spectacular --file schema.yml`
