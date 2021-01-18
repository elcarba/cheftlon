const asyncHandler = require('express-async-handler');

exports.signup = asyncHandler(async (req, res) => {
    res.status(200).send("signup");
});

exports.login = asyncHandler(async (req, res, next) => {
    res.status(200).send("login");
});