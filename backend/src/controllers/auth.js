const asyncHandler = require('express-async-handler');
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { responseHandler } = require("../helpers/helper");

exports.signup = asyncHandler(async (req, res) => {
    const userExists = await User.findOne({
        email: req.body.email
    });

    if (userExists) {
        responseHandler(
            res,
            false,
            400,
            'Email already exists'
        );
    }

    const user = await User.create(req.body);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    responseHandler(
        res,
        true,
        200,
        'User registered successfully!',
        formatUser(user)
    );
});

exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        responseHandler(
            res,
            false,
            400,
            "The email is not registered"
        );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        responseHandler(
            res,
            false,
            400,
            "The password does not match"
        );
    }

    responseHandler(
        res,
        true,
        200,
        null,
        formatUser(user)
    );
});

function generateToken(userId){
    const payload = { id: userId };

    //Return token string
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

function formatUser(user){
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user.id),
    };
}