const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");

const app = express();

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB();

//Route files
const listings = require("./routes/listings");
const hosts = require("./routes/hosts");
const guests = require("./routes/guests");
const reservations = require("./routes/reservations");

// Body parser
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Enable CORS
app.use(cors());

app.set("view engine", "ejs");

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent cross-site scripting attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Mount routers
app.use("/api/v1/listings", listings);
app.use("/api/v1/hosts", hosts);
app.use("/api/v1/guests", guests);
app.use("/api/v1/reservations", reservations);

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
