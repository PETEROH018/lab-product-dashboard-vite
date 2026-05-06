import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button } from '@mui/material';

const App = () => {
  const sampleProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]

  const [selectedProducts,setSelectedProducts]=useState(sampleProducts)
  function handleInStockFilter(){
    setSelectedProducts(sampleProducts.filter(product => product.inStock === true))
    
  }
  function handleOutOfStockFilter(){
    setSelectedProducts(sampleProducts.filter(product => product.inStock === false))

  }
  function handleRemoveProduct(id){
    setSelectedProducts(sampleProducts.filter(product => product.id !== id ))
  }

  

  return (
    <div >
      <h1>Product Dashboard</h1>
      
      <Button variant = "contained" sx={{ mr: 2 }} color= "success" onClick={handleInStockFilter}>InStock</Button>
      <Button variant = "contained" color="error" onClick={handleOutOfStockFilter}>OutOfStock</Button>

      <ProductList products={selectedProducts} handleRemoveProduct={handleRemoveProduct} />
      
    </div>
  );
};

export default App;
