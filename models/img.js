const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var imgSchema = mongoose.Schema({
    img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model("Img", imgSchema);