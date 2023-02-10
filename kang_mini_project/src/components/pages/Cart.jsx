import React, { useEffect, useState }from 'react';
import { useRecoilValue } from 'recoil';
import { CartCountState } from '../state/CartCountState';
import CartCard from '../ui/CartCard';
import CartFooter from '../ui/CartFooter';

function Cart () {
  const  [ cartDatas, setCartDatas ] = useState([]);
  const cartCount = useRecoilValue(CartCountState);

  useEffect(() => {
    fetch('http://localhost:3001/carts')
    .then(res => res.json())
    .then(data => { 
      setCartDatas(data)
      console.log(data)
    });
  },[cartCount] );
    

  return (
    <div>
      <ul>
        {
          cartDatas && cartDatas.map(cartData => (
            <CartCard key={cartData.id} cartData={cartData} />
            ))
        }
      </ul>
      <CartFooter />
    </div>
  );
}

export default Cart;