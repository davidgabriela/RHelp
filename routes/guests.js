const express = require("express");
const {
    getGuests,
    getGuest,
    updateGuest,
    createGuest,
    deleteGuest,
} = require("../controllers/guests");

const router = express.Router();

router.route("/").get(getGuests).post(createGuest);

router.route("/:id").get(getGuest).put(updateGuest).delete(deleteGuest);

module.exports = router;
