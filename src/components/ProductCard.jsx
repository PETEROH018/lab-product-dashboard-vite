import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className = {product.inStock === false ? styles.outOfStockCard : styles.card} key={product.id}>
      
      <p>{product.name}</p>

      <p>$ {product.price}</p>

      <p>{product.inStock}</p>
      
    </div>
  );
};

export default ProductCard;
