'use strict'

const express = require('express');
const contentful = require('contentful');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api');

const SPACE_ID = api.SPACE_ID;
const ACCESS_TOKEN = api.ACCESS_TOKEN;

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

const app = express();


app.get('/', (req, res) => {
  client.getEntries({
    'content_type': 'post'
  })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log('\nError occurred while fetching Content Types:');
      console.error(error);
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Production Express Server on PORT: ${PORT}`);
});
