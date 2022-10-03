let express = require("express");
let router = express.Router();
const user = require("../models/user");

router.get("/signup/new", function(req, res){
    res.render("signup");
});

router.post("/signup", function(req,res){
    //grab the user profile from the form and put to database
    
    let data = req.body.signup;
    // user.create(data, function(err, User){
    //     if (err){
    //         console.log("something went wrong");
    //     }
    //     else{
    //         console.log("Successfully added user to db");
    //     }
    // });
});


module.exports = router;