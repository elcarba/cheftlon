const asyncHandler = require('express-async-handler');
const User = require("../models/User");
const { responseHandler } = require("../helpers/helper");
const bcrypt = require("bcryptjs");

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

exports.deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await user.remove();

        responseHandler(
            res,
            true,
            200,
            'User removed successfully!'
        );
    } else {
        responseHandler(
            res,
            false,
            404,
            'User not found',
        );
    }
});

exports.getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')

    if (user) {
        responseHandler(
            res,
            true,
            200,
            null,
            user
        );
    } else {
        responseHandler(
            res,
            false,
            404,
            'User not found',
        );
    }
})

exports.updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        user.name = req.body.name || user.name;
        user.isAdmin = req.body.isAdmin;

        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await user.save()

        responseHandler(
            res,
            true,
            200,
            null,
            formatUser(updatedUser)
        );
    } else {
        responseHandler(
            res,
            false,
            404,
            'User not found',
        );
    }
});

exports.getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        responseHandler(
            res,
            true,
            200,
            null,
            formatUser(user)
        );
    } else {
        responseHandler(
            res,
            false,
            404,
            'User not found',
        );
    }
});

exports.updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name;

        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await user.save();

        responseHandler(
            res,
            true,
            200,
            null,
            formatUser(updatedUser)
        );
    } else {
        responseHandler(
            res,
            false,
            404,
            'User not found',
        );
    }
});

function formatUser(user){
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    };
}