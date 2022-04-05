const express = require("express");
const {
    getHosts,
    getHost,
    updateHost,
    createHost,
    deleteHost,
} = require("../controllers/hosts");

const router = express.Router();

router.route("/").get(getHosts).post(createHost);

router.route("/:id").get(getHost).put(updateHost).delete(deleteHost);

module.exports = router;
