const express = require("express");
const {
    getReservations,
    getReservation,
    updateReservation,
    createReservation,
    deleteReservation,
} = require("../controllers/reservations");

const router = express.Router();

router.route("/").get(getReservations).post(createReservation);

router.route("/:id").get(getReservation).put(updateReservation).delete(deleteReservation);

module.exports = router;
