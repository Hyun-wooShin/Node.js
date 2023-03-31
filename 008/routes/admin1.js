const path = require('path');
const express = require('express');

const productsController = require('../controllers/products.js');

const { title } = require('process');

const router = express.Router();

router.get('/add-product', productsController.getAddProducts);

router.post('/product', productsController.postAddProducts);

module.exports = router;