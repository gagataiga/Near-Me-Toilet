const express = require("express");
const router = express.Router();
const multer = require('multer');
const cloudinary = require("../../cloudinary.conf");
const locations_model = require("../model/location-model");
const toilet_posts_model = require("../model/posts-model");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// upload image 
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
   });
  return res;
}

// get all posts
router.get("/", async (req, res) => {
  try { 
    const allPostsData = await toilet_posts_model.getAllPosts();
    res.status(200).send(allPostsData);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// 
router.post("/", async (req, res) => {
  const { latitude, longitude, rating, free, paper,image_url,comment} = req.body;
  
  try {
    const locations = { longitude: longitude, latitude: latitude };
    const location_id = await locations_model.insertLocation(locations);

    const post = {
      rating: parseInt(rating),
      comment: comment,
      location_id: parseInt(location_id[0].id),
      paper: paper,
      free: free,
      image_url: image_url
    }

    const response = await toilet_posts_model.insertPost(post);
    
    res.status(200).send("Posting is success");

    } catch (err) { 
    console.log(err);
    res.status(400).send(err);
  }
});

router.post("/uploadImage", upload.single('image'), async (req, res) => {
  try {
    // image to b64
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURL = "data:" + req.file.mimetype + ";base64," + b64;
    let response = await handleUpload(dataURL);
    // response should be url 
    res.status(200).send(response.secure_url);
  } catch (err){ 
    console.log("🟥", err);
    res.status(400).send(err);
  }
});

module.exports = router;