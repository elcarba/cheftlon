const express = require("express");
const router = express.Router();
const { getChefs, createChef, updateChef, deleteChef, getChefById, rateChef } = require("../controllers/chef");
const { protect, admin } = require("../middlewares/auth");
const { validateChef, validateChefToRate } = require('../validators/validator');

router.route("/")
    .get(protect, getChefs)
    .post(protect, admin, validateChef, createChef);

router
    .route('/:id')
    .delete(protect, admin, deleteChef)
    .get(protect, getChefById)
    .put(protect, admin, validateChef, updateChef);

router.route('/:id/rate').put(protect, validateChefToRate, rateChef);

module.exports = router;