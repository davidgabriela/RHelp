const Host = require("../models/Host");

// @desc    Get all hosts
// @route   GET /api/v1/hosts
// @access  Public
exports.getHosts = async (req, res, next) => {
    try {
        const hosts = await Host.find();

        res.status(200).json({
            success: true,
            count: hosts.length,
            data: hosts,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Get a single hosts
// @route   GET /api/v1/hosts/:id
// @access  Public
exports.getHost = async (req, res, next) => {
    try {
        const host = await Host.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: host,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Create new hosts
// @route   POST /api/v1/hosts
// @access  Private
exports.createHost = async (req, res, next) => {
    const host = await Host.create(req.body);
    res.status(201).json({
        success: true,
        data: host,
    });
};

// @desc    Update a hosts
// @route   PUT /api/v1/hosts/:id
// @access  Private
exports.updateHost = async (req, res, next) => {
    try {
        const host = await Host.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!host) {
            res.status(400).json({
                success: false,
            });
        }
        res.status(200).json({
            success: true,
            data: host,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};

// @desc    Delete a host
// @route   DELETE /api/v1/hosts/:id
// @access  Private
exports.deleteHost = async (req, res, next) => {
    try {
        const host = await Host.findByIdAndDelete(req.params.id);
        if (!host) {
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
