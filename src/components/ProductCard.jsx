import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Button } from '@mui/material';

const ProductCard = ({ product,handleRemoveProduct }) => {
  return (
    <div className = {product.inStock === false ? "outOfStockClass" : "card"} key={product.id}>
      
      <p>{product.name}</p>

      <p>$ {product.price}</p>

      <p>{product.inStock}</p>

      <Button variant = "contained" color="error" onClick={() => handleRemoveProduct(product.id)}>Remove</Button>
      
    </div>
  );
};

export default ProductCard;
