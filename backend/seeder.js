const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Listing = require("./models/Listing");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Read the JSON files
const listings = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/listings.json`, "utf-8")
);

// Import into DB
const importData = async () => {
    try {
        await Listing.create(listings);
        console.log("Data Imported...".green.inverse);
        process.exit();
    } catch (err) {
        console.log(err);
    }
};

// Delete data
const deleteData = async () => {
    try {
        await Listing.deleteMany();
        console.log("Data Destroyed.. .".red.inverse);
        process.exit();
    } catch (err) {
        console.log(err);
    }
};

if (process.argv[2] === "-i") {
    importData();
} else if (process.argv[2] === "-d") {
    deleteData();
}
