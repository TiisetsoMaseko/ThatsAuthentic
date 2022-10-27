let express = require("express");
let router = express.Router();
let appointment = require("../models/appointment");
let middleware = require("../middleware/middleware");

// show calender
router.get("/services/:id/appointment", middleware.isLoggedIn, function(req,res){
    res.render("appointment")
});


module.exports = router;