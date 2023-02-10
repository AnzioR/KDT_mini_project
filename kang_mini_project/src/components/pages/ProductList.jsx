import React from 'react';
import { useState, useEffect } from 'react';
import style from './ProductList.module.css';
import ProductCard from '../ui/ProductCard';



function ProductList () {

  const [productData, setProductData] = useState();

  useEffect (() => {
    fetch('http://localhost:3001/products')
    .then(response => response.json())
    .then(data => {
      setProductData(data)
      console.log(data)
    })
  },[])


  
  return (
    <div className={style.list}>
      <ul>
        {productData && productData.map( (product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
