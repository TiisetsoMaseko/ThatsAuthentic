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
let User = require("./models/user"); // import the user model
// let Service = require("./models/service"); // import service model

// Importing routes
let homepageRouter = require("./routes/index"); // import the starting page router
let signupRouter = require("./routes/signup");
let loginRouter = require("./routes/login");
let logoutRouter = require("./routes/logout");
let serviceRouter = require("./routes/services");
let appointmentRouter = require("./routes/appointments");

let app = express(); //initialize the app
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true})); // gets data from the form
app.use(express.static(__dirname + "\\public")); // include the css files in the app
app.use("/images", express.static("images")); // access local images in the app
app.use("/icons", express.static("icons")); // access icons in the app



// Configuring Passport
app.use(expressSession({
    secret: "Nails enhance beauty, that is why you come to ThatsAuthentic nail salon",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); //use the passport in the app
app.use(passport.session());
 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); // reading session, taking user data and encoding it
passport.deserializeUser(User.deserializeUser()); // decoding user data

// make user to be accessible to all ejs templates
app.use( (req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

// ROUTES
app.use(homepageRouter);
app.use(signupRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(serviceRouter);
app.use(appointmentRouter);


// Initialize this port to test code in google chrome or postman 
app.listen(3344, function(){
    console.log("ThatsAuthentic Server Has Started")
});