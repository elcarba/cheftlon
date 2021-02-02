const express = require("express");
const router = express.Router();
const { getChefs, createChef, updateChef, deleteChef, getChefById } = require("../controllers/chef");
const { protect, admin } = require("../middlewares/auth");
const { validateChef } = require('../validators/validator');

router.route("/")
    .get(protect, getChefs)
    .post(protect, admin, validateChef, createChef);

router
    .route('/:id')
    .delete(protect, admin, deleteChef)
    .get(protect, getChefById)
    .put(protect, admin, validateChef, updateChef);

module.exports = router;