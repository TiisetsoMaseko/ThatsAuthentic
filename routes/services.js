let express = require("express");
let router = express.Router();
let Service = require("../models/service");
let middleware = require("../middleware/middleware");


router.get("/services", middleware.isLoggedIn, function(req, res){
    Service.find({},function(err, services){
        if (err){
            console.log(err);
        }
        else{
            res.render("services",{services: services});
        }
    });
});

router.get("/services/:id", middleware.isLoggedIn, function(req, res){
    res.send("here you will see how to book for a slot")
});

module.exports = router;