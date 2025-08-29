import React from "react";
import useFetch from "../hooks/userFetch.js";
import "./ProductList.css";

const ProductList = () => {
  const { data, loading, error, refetch } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  // ✅ Fixed syntax
  if (loading) {
    return <p className="loading">Loading products...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="product-container">
      <h2>Product List</h2>
      <button onClick={refetch} className="refresh-btn">🔄 Refresh</button>
      <div className="products">
        {data &&
          data.slice(0, 20).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
