const sendEmail = require("../utils/sendEmail");
const admin = require("firebase-admin");

// @desc    Make reservation
// @route   POST /api/v1/contact
// @access  Public
exports.contactSupport = async (req, res, next) => {

    const message = `${req.body.name} wrote:\n${req.body.message}\n\nContact the person at ${req.body.email}`;
    const email = 'admin@admin.com'

    try {
        console.log("Trying to send email...");
        await sendEmail({
            email,
            subject: "Support",
            message,
        });
        res.status(200).json({ success: true, data: "Email sent" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
    }

};
