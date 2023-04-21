const express = require("express");
const router = express.Router();
const multer = require('multer');
const cloudinary = require("../../cloudinary.conf");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// upload image 
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    folder: 'posts',
    resource_type: "auto",
   });
  return res;
}

router.post("/", async (req, res) => {
  console.log(req.body);
});

router.post("/uploadImage", upload.single('image'), async (req, res, next) => {
  const file = req.file;
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURL = "data:" + req.file.mimetype + ";base64," + b64;
    let response = await handleUpload(dataURL);
    console.log("🟩",response);
  } catch (err){ 
    console.log("🟥",err);
  }
});

module.exports = router;