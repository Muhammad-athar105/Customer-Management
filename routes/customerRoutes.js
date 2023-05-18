const express = require('express');
const router = express.Router();
const {
  createCustomer,
  blockCustomer,
  unblockCustomer,
  getAllCustomers,
} = require('../controllers/customerController');

router.post('/create', createCustomer);
router.get('/viewCustomers', getAllCustomers); 
router.put('/:customerId/block', blockCustomer);
router.put('/:customerId/unblock', unblockCustomer);

module.exports = router;
