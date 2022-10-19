let express = require("express");
let router = express.Router();


router.get("/services", function(req, res){
    let services = [
        {serviceType: "Full Set Acrylic", price: 240, time: "2hrs", img: "../images/full-set-acrylic.jpg"},
        {serviceType: "Nail Art", price: 100, time: "5mins", img: "../images/full-set-acrylic+nail-art.jpg"},
        {serviceType: "Just Gel", price: 190, time: "1hr", img: "../images/just-gel.jpg"}
    ];
    res.render("services", {services: services});
});

module.exports = router;