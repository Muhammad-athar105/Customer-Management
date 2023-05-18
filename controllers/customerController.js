const Customer = require('../models/customerModel');

exports.createCustomer = async (req, res) => {
  try {
    const { name, email } = req.body;
    const customer = new Customer({ name, email, blocked: false });
    const savedCustomer = await customer.save();
    res.json({ message: 'Successfully created customer' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.blockCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;
    const customer = await Customer.findByIdAndUpdate(
      customerId,
      { blocked: true },
      { new: true }
    );
    if (customer) {
      res.json({ message: 'Customer blocked successfully' });
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.unblockCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;
    const customer = await Customer.findByIdAndUpdate(
      customerId,
      { blocked: false },
      { new: true }
    );
    if (customer) {
      res.json({ message: 'Customer unblocked successfully' });
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
