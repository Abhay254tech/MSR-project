import pool from '../db.js';
import Customer from '../models/customerModel.js';

async function getAllCustomers() {
  try {
    const [results] = await pool.query('SELECT * FROM customer');
    console.log(results);
    const customers = results.map(result => new Customer(result.id, result.name, result.email, `${(result.id-1) * 1000}`));
    console.log('customers instance list',customers);
    return customers;
  } catch (error) {
    throw error;  
  }
}


async function getCustomerById(id) {
  try {
    const [results] = await pool.query('SELECT * FROM customer WHERE id = ?', [id]);
    if (results.length === 0) {
      return null;  
    }
    const { id: customerId, name, email } = results[0];
    console.log('result ',results[0]);
    return new Customer(customerId, name, email, `${(customerId-1) * 1000}`); 
  } catch (error) {
    throw error;  
  }
}

async function createCustomer(name, email) {
  try {
    const customer = new Customer(null, name, email);  // Create an instance
    if (!customer.isValidEmail()) {
      throw new Error('Invalid email format');
    }
    const [results] = await pool.query('INSERT INTO customer (name, email) VALUES (?, ?)', [customer.name, customer.email]);
    return results;  
  } catch (error) {
    throw error;  
  }
}

async function updateCustomer(id, name, email) {
  try {
    const customer = new Customer(id, name, email);  
    if (!customer.isValidEmail()) {
      throw new Error('Invalid email format');
    }
    const [results] = await pool.query('UPDATE customer SET name = ?, email = ? WHERE id = ?', [customer.name, customer.email, customer.id]);
    return results;  
  } catch (error) {
    throw error;  
  }
}

async function deleteCustomer(id) {
  try {
    const [results] = await pool.query('DELETE FROM customer WHERE id = ?', [id]);
    return results;  
  } catch (error) {
    throw error;  
  }
}

export default {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
