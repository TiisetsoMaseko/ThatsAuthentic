// initialise the app with express
let express = require("express");
let app = express();
let bodyParser = require("body-parser");

let homepageRouter = require("./routes/index");

app.use(homepageRouter);


// initialize this port to test code in google chrome or postman 
app.listen(3344, function(){
    console.log("ThatsAuthentic Server Has Started")
});