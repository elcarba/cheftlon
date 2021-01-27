const express = require("express");
const router = express.Router();
const {
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
    getUserProfile,
    updateUserProfile
} = require("../controllers/user");
const { signup } = require("../controllers/auth");
const { protect, admin } = require("../middlewares/auth");
const { validateUser, validateEditUser } = require('../validators/validator');

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, validateEditUser, updateUserProfile)

router.route("/")
    .get(protect, admin, getUsers)
    .post(protect, admin, validateUser, signup);

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, validateEditUser, updateUser);

module.exports = router;