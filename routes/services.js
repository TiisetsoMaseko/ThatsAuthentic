let express = require("express");
let router = express.Router();
let Service = require("../models/service");


router.get("/services", function(req, res){
    Service.find({},function(err, services){
        if (err){
            console.log(err);
        }
        else{
            res.render("services",{services: services});
        }
    });
});

module.exports = router;