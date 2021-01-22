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
        user.isAdmin = req.body.isAdmin || user.isAdmin;

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

function formatUser(user){
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    };
}