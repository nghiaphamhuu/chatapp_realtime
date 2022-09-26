const express = require('express');
const router = express.Router();

const roomController = require('../controller/roomController');

router.use('/', roomController.index)

module.exports = router