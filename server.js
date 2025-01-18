// src/server.js
import express from 'express';
import customerController from './controllers/customerController.js';

const app = express();
const port = 3000;

app.use(express.json());  // Middleware to parse JSON

// Define routes
app.get('/customers', customerController.getAllCustomers);
app.get('/customers/:id', customerController.getCustomerById);
app.post('/customers', customerController.createCustomer);
app.put('/customers/:id', customerController.updateCustomer);
app.delete('/customers/:id', customerController.deleteCustomer);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
