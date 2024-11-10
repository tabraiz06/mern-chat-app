const express= require('express')
const {
  Login,
  signUp,
  logout,
  Users,
} = require("../controllers/userController");
const multer = require("multer");
const fs = require("fs");
const verifyToken = require('../middleware/verifyToken');
const router= express.Router()

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Create the 'uploads' directory if it doesn't exist
    const dir = "../frontend/public/images/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });


router.post('/register',upload.single("pic"), signUp)
router.post('/login', Login)
router.post('/logout', logout)
router.get('/users',verifyToken, Users)

module.exports= router
