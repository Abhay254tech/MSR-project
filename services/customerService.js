// src/services/customerService.js
import customerRepository from '../repositories/customerRepository.js';

function getAllCustomers() {
  return customerRepository.getAllCustomers();
}

function getCustomerById(id) {
  return customerRepository.getCustomerById(id);
}

function createCustomer(name, email) {
  return customerRepository.createCustomer(name, email);
}

function updateCustomer(id, name, email) {
  return customerRepository.updateCustomer(id, name, email);
}

function deleteCustomer(id) {
  return customerRepository.deleteCustomer(id);
}

export default {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
