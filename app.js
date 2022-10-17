// Importing libraries
let express = require("express"); // initialise the app with express
let bodyParser = require("body-parser");
let passport = require("passport");
let LocalStrategy = require("passport-local");
let passportLocalMongoose = require("passport-local-mongoose");
let expressSession = require("express-session");
let mongoose = require("mongoose"); // import the mongoose dependency
mongoose.connect("mongodb://localhost:27017/demo_thatsAuthentic"); // connect to a local database (for now)

// Importing models
let User = require("./models/user.js"); // import the user model

// Importing routes
let homepageRouter = require("./routes/index"); // import the starting page router
let signupRouter = require("./routes/signup");
let loginRouter = require("./routes/login");

let app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true})); // gets data from the form
app.use(express.static(__dirname + "\\public")); // include the css files in the app


// Configuring Passport
app.use(expressSession({
    secret: "Nails enhance beauty, that is why you come to ThatsAuthentic nail salon",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); //use the passport in the app
app.use(passport.session());
 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); // reading session, taking user datae and ncoding user data
passport.deserializeUser(User.deserializeUser()); // decoding user data

// ROUTES
app.use(homepageRouter);
app.use(signupRouter);
app.use(loginRouter);


// Initialize this port to test code in google chrome or postman 
app.listen(3344, function(){
    console.log("ThatsAuthentic Server Has Started")
});