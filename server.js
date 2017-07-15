const express = require('express');
const contentful = require('contentful');
// const path = require('path');
// const bodyParser = require('body-parser');
const api = require('./api');

const SPACE_ID = process.env.API_SPACE_ID || api.SPACE_ID;
const ACCESS_TOKEN = process.env.API_ACCESS_TOKEN || api.ACCESS_TOKEN;

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space.
  // Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN,
});

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

function parseReponse(res, data) {
  const posts = [];
  data.items.map((item) => {
    const itemObject = {
      title: '',
      id: '',
      heroImage: {
        url: '',
        title: '',
        description: '',
      },
      tags: '',
      photoBlocks: [],
    };
    itemObject.title = item.fields.title;
    itemObject.id = item.sys.id;
    itemObject.heroImage.url = item.fields.heroImage.fields.file.url;
    itemObject.heroImage.description = item.fields.heroImage.fields.description;
    itemObject.heroImage.title = item.fields.heroImage.fields.title;
    itemObject.tags = item.fields.tags;
    item.fields.photoBlockModels.map((photoBlock) => {
      const photoBlockObject = {
        caption: '',
        galleryType: '',
        photos: [],
        copy: '',
        tags: [],
      };
      photoBlockObject.caption = photoBlock.fields.title;
      photoBlockObject.galleryType = photoBlock.fields.galleryType;
      photoBlockObject.copy = photoBlock.fields.photoCopy;
      photoBlockObject.tags = photoBlock.fields.tags;
      photoBlock.fields.photos.map((photo) => {
        const photoObject = {
          url: '',
          title: '',
          description: '',
        };
        photoObject.url = photo.fields.file.url;
        photoObject.title = photo.fields.title;
        photoObject.description = photo.fields.description;
        photoBlockObject.photos.push(photoObject);
      });
      itemObject.photoBlocks.push(photoBlockObject);
    });

    posts.push(itemObject);
  });
  res.json(posts);
}

function parseReponseForHomepage(res, data) {
  const posts = [];
  data.items.map((item) => {
    const itemObject = {
      title: '',
      id: '',
      heroImage: {
        url: '',
        title: '',
        description: '',
      },
      tags: '',
    };
    itemObject.title = item.fields.title;
    itemObject.id = item.sys.id;
    itemObject.heroImage.url = item.fields.heroImage.fields.file.url;
    itemObject.heroImage.description = item.fields.heroImage.fields.description;
    itemObject.heroImage.title = item.fields.heroImage.fields.title;
    itemObject.tags = item.fields.tags;

    posts.push(itemObject);
  });
  res.json(posts);
}

function parseReponseFromHomepage(res, data) {
  const posts = [];
  data.items[0].fields.homepageStories.map((item) => {
    const itemObject = {
      title: '',
      id: '',
      heroImage: {
        url: '',
        title: '',
        description: '',
      },
      tags: '',
    };
    itemObject.title = item.fields.title;
    itemObject.id = item.sys.id;
    itemObject.heroImage.url = item.fields.heroImage.fields.file.url;
    itemObject.heroImage.description = item.fields.heroImage.fields.description;
    itemObject.heroImage.title = item.fields.heroImage.fields.title;
    itemObject.tags = item.fields.tags;

    posts.push(itemObject);
  });
  res.json(posts);
}

app.get('/', (req, res) => {
  client.getEntries({
    content_type: 'post',
  })
  .then((data) => {
    parseReponse(res, data);
  })
  .catch((error) => {
    console.log('\nError occurred while fetching Content Types:');
    console.error(error);
  });
});

app.get('/all-data', (req, res) => {
  client.getEntries({
    content_type: 'post',
  })
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    console.log('\nError occurred while fetching Content Types:');
    console.error(error);
  });
});

app.get('/home', (req, res) => {
  client.getEntries({
    content_type: 'homepage',
  })
  .then((data) => {
    parseReponseFromHomepage(res, data);
  })
  .catch((error) => {
    console.log('\nError occurred while fetching Content Types:');
    console.error(error);
  });
});

app.get('/home-unsort', (req, res) => {
  client.getEntries({
    content_type: 'post',
  })
  .then((data) => {
    parseReponseForHomepage(res, data);
  })
  .catch((error) => {
    console.log('\nError occurred while fetching Content Types:');
    console.error(error);
  });
});

app.get('/post/:id', (req, res) => {
  client.getEntries({
    content_type: 'post',
    'sys.id': req.params.id,
  })
  .then((data) => {
    parseReponse(res, data);
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
