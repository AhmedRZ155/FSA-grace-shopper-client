import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const BASE_URL = 'http://localhost:1337/api';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      if (data.success) {
        console.log('Data fetched successfully');
      }
      setProducts(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container product-grid'>
      <h1>Products</h1>
      {products.map((product) => (
        <div
          onClick={() => navigate(`/products/${product.id}`)}
          className='product-card'
          key={product.id}
        >
          <h2>{product.name}</h2>
          <p className='description'>{product.description}</p>
          <p className='price'>{product.price}</p>
          <p className='category'>{product.category}</p>
          <p className='quantity'>{product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
