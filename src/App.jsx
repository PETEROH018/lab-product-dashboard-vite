import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button } from '@mui/material';

const App = () => {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 29.99, inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 89.99, inStock: false },
    { id: 3, name: "USB-C Hub", price: 45.00, inStock: true },
    { id: 4, name: "Monitor Stand", price: 34.50, inStock: false },
    { id: 5, name: "LED Desk Lamp", price: 25.00, inStock: false },
    { id: 6, name: "Noise Cancelling Headphones", price: 199.99, inStock: true },
    { id: 7, name: "Webcam 1080p", price: 59.95, inStock: true },
    { id: 8, name: "Portable SSD 1TB", price: 120.00, inStock: false }
  ]

  const [selectedProducts,setSelectedProducts]=useState(products)
  function handleInStockFilter(){
    setSelectedProducts(products.filter(product => product.inStock === true))
    return 
  }
  function handleOutOfStockFilter(){
    setSelectedProducts(products.filter(product => product.inStock === false))

  }

  

  return (
    <div >
      <h1>Product Dashboard</h1>
      
      <Button variant = "contained" sx={{ mr: 2 }} color= "success" onClick={handleInStockFilter}>InStock</Button>
      <Button variant = "contained" color="error" onClick={handleOutOfStockFilter}>OutOfStock</Button>

      <ProductList products={selectedProducts} />
      
    </div>
  );
};

export default App;
