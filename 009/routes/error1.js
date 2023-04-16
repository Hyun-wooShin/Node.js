const path = require('path');
const express = require('express');

const errorController = require('../controllers/error.js');

const router = express.Router();

router.use(errorController.get404);

module.exports = router;