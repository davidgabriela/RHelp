const mongoose = require("mongoose");

const HostSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please add a name"],
        maxlength: [50, "Name cannot be more than 50 characters"],
    },
    phone: {
        type: String,
        maxlength: [20, "Phone number cannot be longer than 20 characters"],
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please add a valid email",
        ],
    },
});

module.exports = mongoose.model("Host", HostSchema);
