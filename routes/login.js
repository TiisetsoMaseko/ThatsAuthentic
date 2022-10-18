let express = require("express");
const passport = require("passport");
let router = express.Router();

// show the login form
router.get("/login", function(req, res){
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/services"
}) ,function(req,res){
});


module.exports = router;