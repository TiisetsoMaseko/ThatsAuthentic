// initialise the app with express
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let homepageRouter = require("./routes/index"); // import the starting page router
let mongoose = require("mongoose"); // import the mongoose dependency
mongoose.connect("mongodb://localhost:27017/demo_thatsAuthentic"); // connect to localhost database

let User = require("./models/user.js"); // import the user model

app.use(homepageRouter);


// initialize this port to test code in google chrome or postman 
app.listen(3344, function(){
    console.log("ThatsAuthentic Server Has Started")
});