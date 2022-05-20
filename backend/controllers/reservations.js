const Reservation = require("../models/Reservation");

// @desc    Get all reservations
// @route   GET /api/v1/reservations
// @access  Public
exports.getReservations = async (req, res, next) => {

    res.status(200).json(res.advancedResults);
};

// @desc    Get a single reservation
// @route   GET /api/v1/reservations/:id
// @access  Public
exports.getReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: reservation,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Create new reservations
// @route   POST /api/v1/reservations
// @access  Private
exports.createReservation = async (req, res, next) => {
    const reservation = await Reservation.create(req.body);
    res.status(201).json({
        success: true,
        data: reservation,
    });
};

// @desc    Update a reservations
// @route   PUT /api/v1/reservations/:id
// @access  Private
exports.updateReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!reservation) {
            res.status(400).json({
                success: false,
            });
        }
        res.status(200).json({
            success: true,
            data: reservation,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Delete a reservation
// @route   DELETE /api/v1/reservations/:id
// @access  Private
exports.deleteReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) {
            res.status(400).json({
                success: false,
            });
        }
        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};
