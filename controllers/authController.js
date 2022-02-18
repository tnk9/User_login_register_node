var express = require("express"),
  User = require("../models/user"),
  Img = require("../models/img"),
  jwt = require("jwt-simple");
const { createToken, verifyToken } = require("../utils/jwt");
const bcrypt = require("bcrypt");
const fs = require('fs');
const multer = require('multer');
  

exports.login = function (req, res) {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      console.log("Error");
    } else {
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (validPassword) {
        res.send(createToken(
          { id: user._id }
        ));
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    }
  });
};

exports.register = async function (req, res) {
  var user = new User();
  user.name = req.body.name;
  user.dob = req.body.dob;
  user.email = req.body.email;
  user.password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  console.log(user);

  user.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Registered");
      res.send(user);
    }
  });
};


exports.profile = function (req, res) {
  User.findById(req.uid, function (err, data) {
    if (err) {
      console.log(err);
    } else {

      var birthday = new Date(data.dob);
      var current_date = new Date();

      var Difference_In_Time = current_date.getTime() - birthday.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      console.log(parseInt(Difference_In_Days));

      if ((parseInt(Difference_In_Days) >= 0) && (parseInt(Difference_In_Days) <= 7)) {
        var days = 'birthday coming in  ' + parseInt(Difference_In_Days) + ' days ';
      } else {
        var days = '';
      }

      return res.render('data.ejs', { "name": data.name, "email": data.email, 'dob': birthday, 'birthdayMessage': days });
    }
  });
}

exports.uploadimg = function (req, res) {

  var img = fs.readFileSync(req.file.path);
  var encode_img = img.toString('base64');
  var final_img = {
    contentType: req.file.mimetype,
    image: Buffer.from(encode_img, 'base64')
  };
  console.log(final_img);
}