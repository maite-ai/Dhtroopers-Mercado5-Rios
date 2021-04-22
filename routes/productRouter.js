const express = require('express');
const router = express.Router();
const controladorProduct = require('../controller/productController');

router.get('/products', controladorProduct.products);

router.get('/cart', controladorProduct.cart);

router.get('/create', controladorProduct.create);


module.exports = router;