const express = require("express");
const { makeReservation } = require("../controllers/reservations");

const router = express.Router();

router.route("/").post(makeReservation);

module.exports = router;
