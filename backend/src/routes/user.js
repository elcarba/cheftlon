const express = require("express");
const router = express.Router();
const {
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
    getUserProfile,
    updateUserProfile,
    uploadUserAvatar
} = require("../controllers/user");
const { signup } = require("../controllers/auth");
const { protect, admin } = require("../middlewares/auth");
const { uploadFileMiddleware } = require("../middlewares/upload");
const { validateUser, validateEditUser } = require('../validators/validator');

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, validateEditUser, updateUserProfile)

router.route('/profile/upload-avatar')
    .put(protect, uploadFileMiddleware, uploadUserAvatar);

router.route("/")
    .get(protect, admin, getUsers)
    .post(protect, admin, validateUser, signup);

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, validateEditUser, updateUser);

router.route('/:id/upload-avatar')
    .put(protect, admin, uploadFileMiddleware, uploadUserAvatar);

module.exports = router;