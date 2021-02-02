const auth = require('./auth');
const user = require('./user');
const chef = require('./chef');
const express = require('express');
const router = express.Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/chefs', chef);

module.exports = router;