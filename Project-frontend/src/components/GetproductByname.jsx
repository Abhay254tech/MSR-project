import React, { useState } from 'react';
import '../styles/createproduct.css';
import ProductTable from './product';

const GetProductByName = () => {
  const [productName, setProductName] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName) {
      setError('Product name is required');
      return;
    }
    try {
      console.log('Search product with name:', productName);
      const response = await fetch(`http://localhost:3000/products/name/${productName}`);
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        return;
      }else{
        setData([data]);
      }
     
      setError('');
    } catch (error) {
      console.error('Error finding product:', error);
      setError('Error finding product');
    }
  };

  return (
    <div>
      {data.length > 0 ? <ProductTable data={data} />:<p>No product found</p>}
      <h2>Find Product</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={handleChange}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <button type="submit">Find Product</button>
      </form>
      
    </div>
  );
};

export default GetProductByName;