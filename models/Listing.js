const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
    owner_email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please add a valid email",
        ],
    },
    title: {
        type: String,
        required: [true, "Please add a title"],
        trim: true,
        maxlength: [50, "Title cannot be more than 50 characters"],
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    },
    address: {
        type: String,
        required: [true, "Please add an address"],
    },
    // location: {
    //     // GeoJSON Point
    //     type: {
    //         type: String,
    //         enum: ["Point"],
    //         required: false,
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: false,
    //         index: "2dsphere",
    //     },
    //     formattedAddress: String,
    //     street: String,
    //     city: String,
    //     state: String,
    //     zipcode: String,
    //     country: String,
    // },

    accomodation_type: {
        type: String,
    },
    type_space: {
        type: String,
    },
    number_guests: {
        type: String,
    },
    number_bedrooms: {
        type: String,
    },
    safety_items: {
        type: [String],
    },
    extra_services: {
        type: [String],
    },
    additional_facilities: {
        type: [String],
    },
    photo: {
        type: String,
    },
    averageRating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [10, "Rating cannot be more than 10"],
    },
});

module.exports = mongoose.model("Listing", ListingSchema);
