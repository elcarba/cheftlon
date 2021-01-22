const express = require("express");
const router = express.Router();
const { login, signup } = require("../controllers/auth");
const { validateLogin, validateUser } = require('../validators/validator');

router.route("/signup").post(validateUser, signup);
router.route("/login").post(validateLogin, login);

module.exports = router;