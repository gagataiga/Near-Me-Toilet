const express = require("express");
const path = require("path");

function setupServer() { 
  const app = express();
  
  app.get('/api/hello', (req, res) => {
    res.send('world')
  });
  
  return app
}

module.exports = setupServer;

