const express = require("express");
const router = express.Router();
const multer = require('multer');
const cloudinary = require("../../cloudinary.conf");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// upload image 
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
   });
  return res;
}

// fetch image from cloudinary
async function handleFetchImage(public_id) {
  console.log("👺", public_id);
  const res = await cloudinary.image(public_id,
    {
      secure: true,
      type: 'fetch'
    })
  return res;
}

// 
router.get("/:img_id", async (req, res) => {
  console.log("image_id",req.params.img_id);
  try {
    const image_id = req.params.img_id;
    const result = await handleFetchImage(image_id);
    console.log(result);
    res.status(200).send(result);
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
    console.log("🟩",response.url);
  } catch (err){ 
    console.log("🟥",err);
  }
});

module.exports = router;