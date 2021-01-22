const auth = require('./auth');
const user = require('./user');
const express = require('express');
const router = express.Router();

router.use('/auth', auth);
router.use('/users', user);

module.exports = router;