const express = require("express");
const path = require("path");
const postsRouter = require("./router/posts-router");

function setupServer() { 
  const app = express();

  app.use(express.json());
  // posts
  app.use('/posts', postsRouter);
  
  app.get('/api/hello', (req, res) => {
    res.send('world')
  });
  
  return app
}

module.exports = setupServer;

