const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/user");
const { signup } = require("../controllers/auth");
const { protect, admin } = require("../middlewares/auth");
const { validateLogin, validateUser } = require('../validators/validator');

router.route("/").get(protect, admin, getUsers)
    .post(validateUser, protect, admin, signup);

module.exports = router;