const express = require("express");
const {
    getReservations,
    getReservation,
    updateReservation,
    createReservation,
    deleteReservation,
} = require("../controllers/reservations");

const Reservation = require("../models/Reservation");
const advancedResults = require("../middleware/advancedResults");

const router = express.Router({ mergeParams: true });

router.route("/")
    .get(
        advancedResults(Reservation, {
            path: "listing guest",
            select: "owner_email title description photo email",
        }),
        getReservations
    )
        .post(createReservation);

router.route("/:id").get(getReservation).put(updateReservation).delete(deleteReservation);

module.exports = router;
