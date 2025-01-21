import React, { useState } from 'react';
import '../styles/createproduct.css';

function CreateProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      const data = await response.json();
      console.log('Created product:', data);
      // Clear form
        setProduct({
            name: '',
            description: '',
            price: ''
        });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className='form-group'>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div >
      <div className='form-group'>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <button  className='form-group' type="submit">Create Product</button>
    </form>
  );
}

export default CreateProduct;