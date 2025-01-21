import React, { useState } from 'react';
import '../styles/createproduct.css';

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^[a-fA-F0-9]{0,24}$/.test(value)) {
      setProductId(value);
      setError('');
    } else {
      setError('Invalid ObjectId format');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (productId.length !== 24) {
      setError('ObjectId must be 24 characters long');
      return;
    }
    try {
      console.log('Deleting product with ID:', productId); 
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log('Deleted product:', data);

    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Product ID:</label>
          <input
            type="text"
            name="productId"
            value={productId}
            onChange={handleChange}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default DeleteProduct;