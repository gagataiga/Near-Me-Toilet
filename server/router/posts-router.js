const express = require("express");
const router = express.Router();
const multer = require('multer');
const cloudinary = require("../../cloudinary.conf");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", async (req, res) => {
  console.log(req.body);
});

router.post("/uploadImage", upload.single('image'), async (req, res, next) => {
  const file = req.file;
  console.log(cloudinary);
  console.log("you are in /uploadImage",file);
});

module.exports = router;