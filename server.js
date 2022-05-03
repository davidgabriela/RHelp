const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");

var fs = require("fs");
var path = require("path");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB();

//Route files
const listings = require("./routes/listings");
const hosts = require("./routes/hosts");
const guests = require("./routes/guests");

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));

// Body parser
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/listings", listings);
app.use("/api/v1/hosts", hosts);
app.use("/api/v1/guests", guests);
var multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    },
});

var upload = multer({ storage: storage });

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
});

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server $ exit process
    server.close(() => process.exit(1));
});
