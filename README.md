# website

## Frontend
npm install
npm run dev -> builds index-bundle

generate API Client based on `schema.yml` file
`openapi-generator-cli generate -i ../backend/schema.yml -g typescript-fetch -o ./src/api-client/`
or
`openapi-generator-cli generate -i http://127.0.0.1:8000/api/schema/ -g typescript-fetch -o ./src/api-client/`


## Backend
generate api schema
`python manage.py spectacular --file schema.yml`
