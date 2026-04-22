const express = require('express');
const { postOrder } = require('../controllers/ordersController');

const router = express.Router();

router.post('/', postOrder);

module.exports = router;
