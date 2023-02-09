import React, { useEffect, useState }from 'react';
import { useRecoilValue } from 'recoil';
import { CartCountState } from '../state/CartCountState';

function Cart () {
  const  [ cartDatas, setCartDatas ] = useState([]);
  const cartCount = useRecoilValue(CartCountState);

  useEffect(() => {
    fetch('http://localhost:3001/carts')
    .then(res => res.json())
    .then(data => setCartDatas(data));
  },[cartCount] );
    

  return (
    <div>
      <ul>
        {
          cartDatas.map(cartData => (
            <li key={cartData.id}>
              <img src={cartData.thumbnail} alt={cartData.description} />
              <p>{cartData.name}</p>
              <p>{cartData.price} 원</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Cart;