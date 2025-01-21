import { useEffect, useState } from 'react';
import '../styles/App.css';
import CreateProduct from './createproduct';
import ProductTable from './product';
import DeleteProduct from './deleteProduct';
import UpdateProduct from './updateProduct';
import GetProductByName from './GetproductByname';

function App() {
  const [data, setData] = useState([]);
  const [showproduct, setShowproduct] = useState(false);
  const [showcreateproduct, setShowcreateproduct] = useState(false);
  const [showdeleteproduct, setShowdeleteproduct] = useState(false);
  const [showupdateproduct, setShowupdateproduct] = useState(false);
  const [showgetproductbyid, setShowgetproductbyid] = useState(false);

  const fetchData = async () => {
    let url = 'http://localhost:3000/products';
    if (url) {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [showproduct]);

  useEffect(() => {

  }, [showcreateproduct]);
  
  function handleshowProduct() {
    setShowproduct(!showproduct);
  }

  function handleshow(value) {
    if (value === 'Create Product') {
      setShowcreateproduct(true);
      setShowdeleteproduct(false);
      setShowupdateproduct(false);
      setShowgetproductbyid(false);

    } else if (value === 'Delete Product') {
      setShowdeleteproduct(true);
      setShowcreateproduct(false);
      setShowupdateproduct(false);
      setShowgetproductbyid(false);
    } else if (value === 'Update Product') {
      setShowupdateproduct(true);
      setShowcreateproduct(false);
      setShowdeleteproduct(false);
      setShowgetproductbyid(false);
    } else if (value === 'Find Product') {
      setShowupdateproduct(false);
      setShowcreateproduct(false);
      setShowdeleteproduct(false);
      setShowgetproductbyid(true);
    }
  }

  return (
    <>
  
      {showproduct && <ProductTable data={data} />}
      {showcreateproduct && <CreateProduct />}
      {showdeleteproduct && <DeleteProduct />}
      {showupdateproduct && <UpdateProduct />}
      {showgetproductbyid && <GetProductByName />}

     
      <div className="buttons">
        <button className='table-btn' onClick={fetchData}>Refresh Data</button>
        <button className='table-btn' onClick={handleshowProduct}>{showproduct? "Hide Products":"Show Products"}</button>
        <button className='table-btn' value="Create Product" onClick={(e) => handleshow(e.target.value)}>Create Product</button>
        <button className='table-btn' value="Delete Product" onClick={(e) => handleshow(e.target.value)}>Delete Product</button>
        <button className='table-btn' value="Update Product" onClick={(e) => handleshow(e.target.value)}>Update Product</button>
        <button className='table-btn' value="Find Product" onClick={(e) => handleshow(e.target.value)}>Find Product</button>
      </div>
    </>
  );
}

export default App;