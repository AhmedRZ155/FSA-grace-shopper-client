import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.data);
      //   console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <p>{product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
