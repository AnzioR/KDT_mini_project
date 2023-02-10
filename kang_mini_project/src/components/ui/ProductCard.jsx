import React from 'react';
import { useRecoilState } from 'recoil';
import { CartCountState } from '../state/CartCountState';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';

const ProductCard = ({product}) => {

  const [ cartCount, setCartCount ] = useRecoilState(CartCountState);

  const handleAddCart = () => {
    fetch('http://localhost:3001/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: product.id,
        name: product.name,
        thumbnail: product.thumbnail,
        price: product.price,
        quantity: 1
      })
    })
      .then(res => {
        res.json();
        if (res.ok) {
          setCartCount(cartCount + 1);
          console.log(cartCount)
        }
      })
  }
  return (
    <li key={product.id}>
      <div>
        <Link to={`/productdetail/${product.id}`} >
          <img src={product.thumbnail} alt="" />
        </Link>
      </div>
      <div>
        {product.name}
        {product.price} 원
        <Button variant="outline-secondary" onClick={handleAddCart}>장바구니 담기</Button>
      </div>
    </li>
  )
}

export default ProductCard;