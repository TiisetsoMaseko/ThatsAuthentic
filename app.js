// initialise the app with express
let express = require("express");
let bodyParser = require("body-parser");
let passport = require("passport");
let passportLocal = require("passport-local");
let passportLocalMongoose = require("passport-local-mongoose");
let expressSession = require("express-session");
let homepageRouter = require("./routes/index"); // import the starting page router
let mongoose = require("mongoose"); // import the mongoose dependency
mongoose.connect("mongodb://localhost:27017/demo_thatsAuthentic"); // connect to localhost database

let User = require("./models/user.js"); // import the user model
let app = express();

app.use(expressSession({
    secret: "Nails enhance beauty, that is why you come to ThatsAuthentic nail salon",
    resave: false,
    saveUninitialized: false
}));
app.set("view engine", "ejs");
app.use(passport.initialize()); //use the passport in the app
app.use(passport.session());

passport.serializeUser(User.serializeUser()); // reading session, taking user datae and ncoding user data
passport.deserializeUser(User.deserializeUser()); // decoding user data
app.use(homepageRouter);


// initialize this port to test code in google chrome or postman 
app.listen(3344, function(){
    console.log("ThatsAuthentic Server Has Started")
});