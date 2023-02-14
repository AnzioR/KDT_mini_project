import React from 'react';
import { useState, useEffect } from 'react';
import style from './ProductList.module.css';
import ProductCard from '../ui/ProductCard';
// import Button from 'react-bootstrap/Button';



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
    <div className={style.pl}>
      {/* <div className={style.cartegory}>
        <Button variant="outline-dark">전체상품보기</Button>
      </div> */}
      <div className={style.list}>
        <ul>
          {productData && productData.map( (product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
