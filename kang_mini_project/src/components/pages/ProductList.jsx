import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './ProductList.module.css';


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
        {productData && productData.map( product => (
          <li key={product.id}>
            <Link to={ `/productdetail/${product.id}`} >
              <img src={product.thumbnail} alt="" />
            </Link>
            {product.name}
            {product.price} 원
            <button>장바구니 담기</button>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default ProductList;
