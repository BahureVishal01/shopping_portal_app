const constantsController = require("../controllers/constants");
const express = require('express');
const router = express.Router()

router.get('/statusList', constantsController.constantsList);

module.exports = router;
