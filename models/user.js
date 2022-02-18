//make user schema  ¬
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profileImage:{
        data: Buffer,
        contentType: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
