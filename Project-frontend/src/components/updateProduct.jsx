import React, { useState } from 'react';
import '../styles/createproduct.css';

function UpdateProduct() {
    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: ''
    });
    const [error, setError] = useState('');

    const handleIdChange = (e) => {
        setProductId(e.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleFetch = async () => {
        if (productId.length !== 24) {
            setError('Product ID must be 24 characters long');
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/products/${productId}`);
            const data = await response.json();
            setProduct({
                name: data.name || '',
                description: data.description || '',
                price: data.price || ''
            });
            setError('');
        } catch (error) {
            console.error('Error fetching product:', error);
            setError('Error fetching product');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (productId.length !== 24) {
            setError('Product ID must be 24 characters long');
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            const data = await response.json();
            console.log('Updated product:', data);
            setError('');
        } catch (error) {
            console.error('Error updating product:', error);
            setError('Error updating product');
        }
    };

    return (
        <div>
            <h2>Update Product</h2>
            <div className='form-group'>
                <label>Product ID:</label>
                <input
                    type="text"
                    value={productId}
                    onChange={handleIdChange}
                    required
                />
                <button onClick={handleFetch}>Fetch Product</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='form-group' type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default UpdateProduct;