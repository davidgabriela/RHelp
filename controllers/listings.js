const Listing = require("../models/Listing");

// @desc    Get all listings
// @route   GET /api/v1/listings
// @access  Public
exports.getListings = async (req, res, next) => {
    try {
        const listings = await Listing.find();

        res.status(200).json({
            success: true,
            count: listings.length,
            data: listings,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Get a single listings
// @route   GET /api/v1/listings/:id
// @access  Public
exports.getListing = async (req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id);

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

// @desc    Create new listings
// @route   POST /api/v1/listings
// @access  Private
exports.createListing = async (req, res, next) => {
    const listing = await Listing.create(req.body);
    res.status(201).json({
        success: true,
        data: listing,
    });
};

// @desc    Update a listings
// @route   PUT /api/v1/listings/:id
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

// @desc    Delete a listing
// @route   DELETE /api/v1/listings/:id
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
