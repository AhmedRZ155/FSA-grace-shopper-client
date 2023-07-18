<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import './SingleProduct.css'

const SingleProduct = () => {
  const [product, setProduct] = useState(null)
  const { productId } = useParams()
  const { token, setCart } = useOutletContext()
=======
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './SingleProduct.css';
import ProductReviews from '../../components/ProductReviews/ProductReviews';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { token, setCart } = useOutletContext();
  const [amount, setAmount] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
>>>>>>> 2d7d7d4c2a75da3654e8564cb237907c9b9e7a54

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/products`,
        )
        const data = await response.json()

        if (data.success) {
          console.log('Data fetched successfully')
        }

        const singleProduct = data.data.find(
<<<<<<< HEAD
          (product) => product.id == productId,
        )
=======
          product => product.id == productId
        );
>>>>>>> 2d7d7d4c2a75da3654e8564cb237907c9b9e7a54

        setProduct(singleProduct)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProducts()
  }, [productId])

  const addToCart = async () => {
    try {
      const { id, name, price } = product

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/carts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productId: id,
            quantity: 1,
            name,
            price,
          }),
        },
      )

      const data = await response.json()
      if (response.ok && data.success) {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
        console.log('Product added to cart:', product.name)
      } else {
        console.error('Failed to add product to cart:', data.message)
      }
    } catch (error) {
      console.error('Failed to add product to cart:', error)
    }
  }

  const addToCart = async () => {
    try {
      const { id, name, price } = product;

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/carts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productId: id,
            quantity: amount,
            name,
            price,
          }),
        }
      );

      const data = await response.json();
      if (response.ok && data.success) {
        setCart(data.data);
        toast.success(data.message);
        console.log('Product added to cart:', product.name);
      } else {
        console.error('Failed to add product to cart:', data.message);
      }
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>
  }

  return (
<<<<<<< HEAD
    <div className="product-detail">
      <img src={product.images[0].url} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <button className="add-to-cart-btn" onClick={addToCart}>
        Add to Cart
      </button>
=======
    <div className='single-product'>
      <div className='product-body'>
        <div className='product-images'>
          <img src={product.images[imageIndex]?.url} alt={product.name} />
          <div className='small-images'>
            {product.images.map((image, index) => (
              <img
                src={image?.url}
                key={index}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className='product-detail'>
          <p className='product-name'>{product.name}</p>
          <p>{product.description}</p>
          <p className='product-price'>{product.price}</p>
          <div className='product-amount'>
            <button
              onClick={() => setAmount(amount - 1)}
              disabled={amount <= 1}
            >
              -
            </button>
            <p>{amount}</p>
            <button onClick={() => setAmount(amount + 1)}>+</button>
          </div>
          <button className='add-to-cart-btn' onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <ProductReviews
        reviews={product.reviews}
        token={token}
        productId={product.id}
        setProduct={setProduct}
      />
>>>>>>> 2d7d7d4c2a75da3654e8564cb237907c9b9e7a54
    </div>
  )
}

export default SingleProduct
