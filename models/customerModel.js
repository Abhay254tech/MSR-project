// src/models/customerModel.js
class Customer {
  constructor(id, name, email,salary) {
    this.id = id || null;    
    this.name = name;
    this.email = email;
    this.salary = salary;
  }


  isValidEmail() {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(this.email);
  }
}

export default Customer;
