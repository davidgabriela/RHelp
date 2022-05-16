const Guest = require("../models/Guest");

// @desc    Get all guests
// @route   GET /api/v1/guests
// @access  Public
exports.getGuests = async (req, res, next) => {
    try {
        const guests = await Guest.find();

        res.status(200).json({
            success: true,
            count: guests.length,
            data: guests,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Get a single guests
// @route   GET /api/v1/guests/:id
// @access  Public
exports.getGuest = async (req, res, next) => {
    try {
        const guest = await Guest.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: guest,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Create new guests
// @route   POST /api/v1/guests
// @access  Private
exports.createGuest = async (req, res, next) => {
    const guest = await Guest.create(req.body);
    res.status(201).json({
        success: true,
        data: guest,
    });
};

// @desc    Update a guests
// @route   PUT /api/v1/guests/:id
// @access  Private
exports.updateGuest = async (req, res, next) => {
    try {
        const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!guest) {
            res.status(400).json({
                success: false,
            });
        }
        res.status(200).json({
            success: true,
            data: guest,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Delete a guest
// @route   DELETE /api/v1/guests/:id
// @access  Private
exports.deleteGuest = async (req, res, next) => {
    try {
        const guest = await Guest.findByIdAndDelete(req.params.id);
        if (!guest) {
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
