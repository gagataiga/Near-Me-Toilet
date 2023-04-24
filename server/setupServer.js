const express = require("express");
const path = require("path");
const postsRouter = require("./router/posts-router");

function setupServer() { 
  const app = express();

  // use json
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  // posts
  app.use('/posts', postsRouter);
  // to check server working
  app.get('/hello', (req, res) => {
    res.send('world')
  });
  
  return app
}

module.exports = setupServer;

