let mongoose = require("mongoose"); // import mongoose

let passportLocalMongoose = require("passport-local-mongoose");
// create a user schema with user properties
let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose); // add authentication to the user
module.exports = mongoose.model("User", userSchema); //return the user model object