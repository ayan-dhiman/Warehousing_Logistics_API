const express = require('express');
const {addWarehouse} = require('../Controllers/warehouseController');
const router = express.Router();

router.post('/add',addWarehouse);

module.exports = router;