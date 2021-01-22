const asyncHandler = require('express-async-handler');
const User = require("../models/User");
const { responseHandler } = require("../helpers/helper");

exports.getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}).select("-password");

    responseHandler(
        res,
        true,
        200,
        null,
        users
    );
})