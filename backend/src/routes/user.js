const express = require("express");
const router = express.Router();
const {
    getUsers,
    deleteUser,
    getUserById,
    updateUser
} = require("../controllers/user");
const { signup } = require("../controllers/auth");
const { protect, admin } = require("../middlewares/auth");
const { validateUser } = require('../validators/validator');

router.route("/")
    .get(protect, admin, getUsers)
    .post(protect, admin, validateUser, signup);

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser);

module.exports = router;