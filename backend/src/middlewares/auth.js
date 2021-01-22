const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { responseHandler } = require("../helpers/helper");

exports.protect = async (req, res, next) => {
    if (!req.headers.authorization) {
        responseHandler(
            res,
            false,
            401,
            "Authorization denied, resource protected via Authentication"
        );
    }

    const authHeader = req.headers.authorization;
    const token = authHeader.replace("Bearer", "").trim();

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        next();
    } catch (err) {
        responseHandler(
            res,
            false,
            401,
            "Token invalid, please Log In"
        );
    }
};

exports.admin = async (req, res, next) => {
    if (!req.user.isAdmin) {
        responseHandler(
            res,
            false,
            401,
            "Authorization denied, user does not have Admin role"
        );
    }

    next();
};