import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function  ProductDetail () {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data));
  }, [id]);

  return (
    <div>
      { product && (
        <div>
          <img src={product.thumbnail} alt={product.description} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price} 원</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;