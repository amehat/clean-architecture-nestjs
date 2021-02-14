# CLEAN ARCHITECTURE NESTJS

This repository is an example of an implementation of a Clean Arcitecture type architecture with the Typescript NestJS framework.
The application is accessible as an API.

## ROUTES

**GET**
- http://localhost:3000/articles
- http://localhost:3000/articles?format=json
- http://localhost:3000/articles?format=json&page=1
- http://localhost:3000/articles?format=html

**POST**
- http://localhost:3000/articles
- http://localhost:3000/articles?format=json
- http://localhost:3000/articles?format=html

  JSON in body raw:
  ```
  {
      slug: string,
      title: string,
      description: string,
      content: string
  }
  ```

## USE

Install
```
yarn or npm i
```

Start in development mode
```
yarn dev or npm run run dev
```

Build the app
```
yarn build or npm run build
```

Start the application
```
yarn start or npm run start
```

## Data model

The data model is based on an article which is constructed as follows:
- slug: string (this is the unique business id)
- title: string
- description: string
- content: string