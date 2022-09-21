let mongoose = require("mongoose"); // import mongoose

// create a user schema with user properties
let userSchema = new mongoose.Schema({
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema); //return the user model object