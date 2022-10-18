let express = require("express");
let router = express.Router();


router.get("/services", function(req, res){
    let services = [
        {serviceType: "Full Set Acrylic", price: 240, time: "2hrs"},
        {serviceType: "Nail Art", price: 100, time: "5mins"},
        {serviceType: "Just Gel", price: 190, time: "1hr"}
    ];
    res.render("services", {services: services});
});

module.exports = router;