const Listing = require("../models/Listing");

// @desc    Get all lisitngs
// @route   GET /api/v1/lisitngs
// @access  Public
exports.getListings = async (req, res, next) => {
    try {
        const lisitngs = await Listing.find();

        res.status(200).json({
            success: true,
            count: lisitngs.length,
            data: lisitngs,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Get a single lisitng
// @route   GET /api/v1/lisitngs/:id
// @access  Public
exports.getListing = async (req, res, next) => {
    try {
        const lisitng = await Listing.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: lisitng,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Create new lisitngs
// @route   POST /api/v1/lisitngs
// @access  Private
exports.createListing = async (req, res, next) => {
    const listing = await Listing.create(req.body);
    res.status(201).json({
        success: true,
        data: listing,
    });
};

// @desc    Update a lisitng
// @route   PUT /api/v1/lisitngs/:id
// @access  Private
exports.updateListing = async (req, res, next) => {
    try {
        const listing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!listing) {
            res.status(400).json({
                success: false,
            });
        }
        res.status(200).json({
            success: true,
            data: listing,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Delete a lisitng
// @route   DELETE /api/v1/lisitngs/:id
// @access  Private
exports.deleteListing = async (req, res, next) => {
    try {
        const listing = await Listing.findByIdAndDelete(req.params.id);
        if (!listing) {
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
