let express = require("express");
let router = express.Router();


router.get("/signup", function(req, res){
    res.send("sign up form goes here")
});


module.exports = router;