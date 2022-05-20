const sendEmail = require("../utils/sendEmail");
const admin = require("firebase-admin");
const serviceAccount = require("../config/serviceAccountKey.json");

// @desc    Make reservation
// @route   POST /api/mail/reservation
// @access  Public
exports.makeReservation = async (req, res, next) => {

    const message = `Your reservation is made!`;
    let user;


    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    }
    
    admin.auth().verifyIdToken(req.headers.authorization).then(async function(decodedToken) {
            let uid = decodedToken.uid;
            user = admin.auth().getUser(uid)

            try {
                await sendEmail({
                    email: (await user).email,
                    subject: "Reservation confirmation",
                    message,
                });
                res.status(200).json({ success: true, data: "Email sent" });
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false });
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};
