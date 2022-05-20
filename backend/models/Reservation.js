const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    guestId: {
        type: String,
    },
    listingId: {
        type: mongoose.Schema.ObjectId,
    },
    number_guests: {
        type: Number,
    },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
