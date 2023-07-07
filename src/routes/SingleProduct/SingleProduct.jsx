import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/products`
        );
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
    <div className='product-detail'>
      <img src={product.images[0].url} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default SingleProduct;
