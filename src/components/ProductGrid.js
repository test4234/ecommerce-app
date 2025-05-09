// src/components/ProductGrid.js
import React from 'react';
import products from '../data/products';
import './ProductGrid.css';

const ProductGrid = () => (
  <div className="product-grid">
    {products.map(product => (
      <div key={product.id} className="product-card">
        <div className="image-wrapper">
          <img src={product.image} alt={product.name} />
        </div>
        <h4>{product.name}</h4>
        <p>{product.price}</p>
        <button>Add</button>
      </div>
    ))}
  </div>
);

export default ProductGrid;
