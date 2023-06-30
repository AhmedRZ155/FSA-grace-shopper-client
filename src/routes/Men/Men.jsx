import React, { useState, useEffect } from 'react';
import './Men.css';
const Men = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/products');
        const data = await response.json();

        if (data.success) {
          console.log('Data fetched successfully');
        }

        const menProducts = data.data.filter(
          (product) => product.category === 'men'
        );
        setProducts(menProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='product-grid'>
        {products.map((product) => (
          <div className='product-card' key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className='price'>{product.price}</p>
            <p className='category'>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
