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
    //let data = req.body.signup;
    //console.log(data);
    user.register(new user({username: req.body.username}), req.body.password, function(err, User){
        if (err){
            console.log(err);
            res.redirect("signup");
        }
        else{
            // log the user in the system
            passport.authenticate("local")(req,res, function(){ // using "local" strategy
                console.log("sign up success");
            });
            res.redirect("services");
        }
    });
});


module.exports = router;