let express = require("express");
const passport = require("passport")
let router = express.Router();


router.get("/logout", function(req, res, next){
    req.logout(function(err){
        if (err){
            return next(err);
        }
        res.send("logged you out")
    });
});


module.exports = router;