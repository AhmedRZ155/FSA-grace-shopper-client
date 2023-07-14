import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import './SingleProduct.css'

const SingleProduct = () => {
  const [product, setProduct] = useState(null)
  const { productId } = useParams()
  const { token, setCart } = useOutletContext()

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
          (product) => product.id == productId,
        )

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

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="product-detail">
      <img src={product.images[0].url} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <button className="add-to-cart-btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default SingleProduct
