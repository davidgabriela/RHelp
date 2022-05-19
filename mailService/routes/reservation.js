const express = require("express");
const { makeReservation } = require("../controllers/reservation");

const router = express.Router();

router.route("/").post(makeReservation);

module.exports = router;
