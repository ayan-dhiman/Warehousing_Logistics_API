const express = require('express');
const { addProduct, getAllProducts, getProduct, updateProduct, deleteProduct, getStock } = require('../Controllers/inventoryController');
const router = express.Router();

router.post('/add_product',addProduct);
router.get('/products',getAllProducts);
router.get('/product/:pid',getProduct);
router.get('/check_product_stock/:pid',getStock);
router.put('/update_product/:pid',updateProduct);
router.delete('/delete_product/:pid',deleteProduct);

module.exports = router;