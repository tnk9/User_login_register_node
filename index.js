const express = require("express"),
  app = express(),
  authRoute = require("./routes/authRoute"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");
  jwt = require("jwt-simple");
  image = require("./models/img");


mongoose.connect("mongodb://localhost/sampledb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.set("view engine","ejs");

app.use(authRoute);

app.listen(3001, () => {
  console.log("Server Started at 3001");
});

app.get("/",(req,res)=>{
	return res.render('index.ejs');
})

app.get("/login",(req,res)=>{
  return res.render('login.ejs');
})