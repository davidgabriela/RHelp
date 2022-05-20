const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    guestId: {
        type: String,
    },
    listingId: {
        type: String,
    },
    number_guests: {
        type: Number,
    },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
