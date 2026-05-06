import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products}) => {
  
  return (
    <div className="grid">
      
      { 
        products.length === 0
        ? <p>no products in stock</p>
        : products.map(product => <ProductCard product={product} key={product.id}/> )
      }
      
    </div>
  );
};

export default ProductList;
