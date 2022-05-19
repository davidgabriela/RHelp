const express = require("express");
const { contactSupport } = require("../controllers/contact");

const router = express.Router();

router.route("/").post(contactSupport);

module.exports = router;
