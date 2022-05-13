const sendEmail = require("../utils/sendEmail");
const admin = require("firebase-admin");
const serviceAccount = require("../config/serviceAccountKey.json");

// @desc    Make reservation
// @route   POST /api/v1/reservation
// @access  Public
exports.makeReservation = async (req, res, next) => {

    const message = `Your reservation is made!`;
    let user;

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    console.log("Header is....", req.headers.authorization)
    
    admin.auth().verifyIdToken(req.headers.authorization).then(async function(decodedToken) {
            let uid = decodedToken.uid;
            console.log("uid is " + uid);
            user = admin.auth().getUser(uid)

            try {
                console.log("Trying to send email...");
                await sendEmail({
                    email: (await user).email,
                    subject: "Your reservation",
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
