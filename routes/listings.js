const express = require("express");
const {
    getListings,
    getListing,
    updateListing,
    createListing,
    deleteListing,
} = require("../controllers/listings");

const router = express.Router();

router.route("/").get(getListings).post(createListing);

router.route("/:id").get(getListing).put(updateListing).delete(deleteListing);

module.exports = router;
