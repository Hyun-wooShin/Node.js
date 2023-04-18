const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin.js');

const { title } = require('process');

const router = express.Router();

router.get('/add-product', adminController.getAddProducts);

router.get('/products', adminController.getAdminProducts);

router.post('/add-product', adminController.postAddProducts);

module.exports = router;