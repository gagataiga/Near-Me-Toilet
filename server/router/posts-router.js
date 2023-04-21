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

//  
router.get("/", async (req, res) => {
  try {
    res.status(200).send("posts");
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
    console.log("🟩", response.url);
    // response should be url 
    res.status(200).send(response.url);
  } catch (err){ 
    console.log("🟥", err);
    res.status(400).send(err);
  }
});

module.exports = router;