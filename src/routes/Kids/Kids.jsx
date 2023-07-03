import React, { useState, useEffect } from 'react'
import './Kids.css'
const Kids = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/products')
        const data = await response.json()

        if (data.success) {
          console.log('Data fetched successfully')
        }

        const kidsProducts = data.data.filter(
          (product) => product.category === 'kids',
        )
        setProducts(kidsProducts)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
          <p className="category">{product.category}</p>
        </div>
      ))}
    </div>
  )
}

export default Kids
