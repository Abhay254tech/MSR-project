// src/controllers/customerController.js
import customerService from '../services/customerService.js';

function getAllCustomers(req, res) {
  customerService.getAllCustomers()
    .then(customers => res.status(200).json(customers))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    });
}

function getCustomerById(req, res) {
  const { id } = req.params;
  customerService.getCustomerById(id)
    .then(customer => {
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.status(200).json(customer);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    });
}

function createCustomer(req, res) {
  const { name, email } = req.body;
  customerService.createCustomer(name, email)
    .then(() => res.status(201).json({ message: 'Customer created successfully' }))
    .catch(error => {
      console.error(error);
      res.status(400).json({ error: error.message });
    });
}

function updateCustomer(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;
  customerService.updateCustomer(id, name, email)
    .then(() => res.status(200).json({ message: 'Customer updated successfully' }))
    .catch(error => {
      console.error(error);
      res.status(400).json({ error: error.message });
    });
}

function deleteCustomer(req, res) {
  const { id } = req.params;
  customerService.deleteCustomer(id)
    .then(() => res.status(200).json({ message: 'Customer deleted successfully' }))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    });
}
export default {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
