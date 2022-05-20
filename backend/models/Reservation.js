const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    guest: {
        type: mongoose.Schema.ObjectId,
        ref: "Guest",
    },
    listing: {
        type: mongoose.Schema.ObjectId,
        ref: "Listing",
    },
    number_guests: {
        type: Number,
    },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
