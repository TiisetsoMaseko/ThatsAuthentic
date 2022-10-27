let mongoose = require("mongoose");

let appointmentSchema = new mongoose.Schema({
    startTime: String,
    date: {
        day: Number,
        month: Number,
        year: Number
    }
});

module.exports = mongoose.model("appointment", appointmentSchema);
