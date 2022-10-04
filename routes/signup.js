const express = require("express");
const passport = require("passport");
const router = express.Router();
const user = require("../models/user");

// send the sign up form to user
router.get("/signup", function(req, res){
    res.render("signup");
});

//grab the user profile from the form and put to database
router.post("/signup", function(req,res){
    let data = req.body.signup;
    console.log(data);
    user.register(new user({username: data.username, email: data.email}), data.password, function(err, User){
        if (err){
            console.log(err);
            res.render("signup");
        }
        else{
            // log the user in the system
            passport.authenticate("local")(req,res, function(){ // using "local" strategy
                res.send("Here user will see all available services");
            });
        }
    });
});


module.exports = router;