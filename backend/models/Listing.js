const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

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
    location: {
        // GeoJSON Point
        type: {
            type: String,
            enum: ["Point"],
            required: false,
        },
        coordinates: {
            type: [Number],
            required: false,
            index: "2dsphere",
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
    },
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
    rented: {
        type: Boolean,
        default: false
    }
});

// Geocode & create location field
ListingSchema.pre("save", async function (next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: "Point",
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetName,
        streetNumber: loc[0].streetNumber,
        city: loc[0].city,
        state: loc[0].stateCode,
        zipcode: loc[0].zipcode,
        country: loc[0].countryCode,
    };

    //Do not save address to DB
    this.address = undefined;
    next();
});

module.exports = mongoose.model("Listing", ListingSchema);
