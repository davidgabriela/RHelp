const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors")
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");

const app = express();

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Route files
const reservations = require("./routes/reservation");
const contact = require("./routes/contact");

// Body parser
app.use(express.json());

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

// Enable CORS
app.use(cors());

// Mount routers
app.use("/api/mail/reservation", reservations);
app.use("/api/mail/contact", contact);

const PORT = process.env.PORT || 4040;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
            .brightBlue.bold
    )
);

// Handle unhandled promise rejections
process.on("unhadledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red.italic);
    //Close server & exit process
    server.close(() => process.exit(1));
});
