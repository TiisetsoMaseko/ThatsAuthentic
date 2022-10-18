let mongoose = require("mongoose");


let serviceSchema = new mongoose.Schema({
    serviceType: String,
    price: Number,
    time: String
});

module.exports = mongoose.model("Service", serviceSchema);