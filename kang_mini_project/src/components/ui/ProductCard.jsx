import React from 'react';
import { useRecoilState } from 'recoil';
import { CartCountState } from '../state/CartCountState';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';



const ProductCard = ({product}) => {

  const [ cartCount, setCartCount ] = useRecoilState(CartCountState);
  const userId = 1;

  const handleAddCart = () => {
    fetch('http://localhost:3001/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: product.id,
        userId: userId,
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
    <div>
      <li key={product.id}>
          <div>
            <Link to={`/productdetail/${product.id}`} >
              <img src={product.thumbnail} alt="" />
            </Link>
          </div>
          <div>
            <p>{product.name}</p>
            <p>{product.price} 원</p>
            <p><Button variant="outline-warning" onClick={handleAddCart}>
            장바구니 담기
            </Button></p>
          </div>
      </li>
    </div>
  )
}

export default ProductCard;