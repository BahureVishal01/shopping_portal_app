const express = require('express')
const router = express.Router();
const taskRoutes = require('./task');
const constants = require('./constants');
router.use('/task', taskRoutes);
router.use('/constants', constants)


module.exports = router;
