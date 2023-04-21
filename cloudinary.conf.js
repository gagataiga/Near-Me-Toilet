const path = require("path");
const cloudinary = require('cloudinary').v2;

require("dotenv").config(
  {
    path: path.join(__dirname, './.env')
  }
);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;