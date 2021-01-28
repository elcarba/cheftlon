const asyncHandler = require('express-async-handler');
const User = require("../models/User");
const { responseHandler } = require("../helpers/helper");
const { deleteFileMiddleware } = require("../middlewares/upload");
const bcrypt = require("bcryptjs");
const fs = require('fs');

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
    const user = await User.findById(req.params.id).select('-password');

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

exports.uploadUserAvatar = asyncHandler(async (req, res) => {
    const id = req.params.id ? req.params.id : req.user._id;
    const user = await User.findById(id);

    if (user) {
        //Retrieve file
        const file = req.file;

        user.avatar.data = fs.readFileSync(file.path);
        user.avatar.contentType = file.mimetype;

        const updatedUser = await user.save();

        //Delete image from fs
        await deleteFileMiddleware(file.path);

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
    const { avatar } = user;
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        avatar: avatar && avatar.data ?
            `data:${avatar.contentType};base64,${Buffer.from(avatar.data)
                .toString('base64')}` : null,
    };
}