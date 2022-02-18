const User = require('../models/user');
var express = require('express');
const auth = require('../middlewares/auth')
var router = express.Router();
var authController = require('../controllers/authController')
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
var upload = multer({ storage: storage });

router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.post("/auth/profile", auth, authController.profile);
router.post("/uploadphoto", upload.single('myImage'), authController.uploadimg);

module.exports = router