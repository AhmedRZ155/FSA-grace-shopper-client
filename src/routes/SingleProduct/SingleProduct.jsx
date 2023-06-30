import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
const BASE_URL = 'http://localhost:1337/api';
const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);

        const data = await response.json();
        if (data.success) {
          console.log('Data fetched successfully');
        }

        const singleProduct = data.data.find(
          (product) => product.id == productId
        );
        setProduct(singleProduct);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='product-card'>
        <h1>{product.name}</h1>
        <p className='description'>{product.description}</p>
        <p className='price'>{product.price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
