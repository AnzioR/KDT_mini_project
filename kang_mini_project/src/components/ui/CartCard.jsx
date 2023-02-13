import React, { useState, useEffect } from "react";

import style from "./CartCard.module.css";
import  Button  from 'react-bootstrap/Button';

import { useRecoilState } from 'recoil';
import { CartCountState } from '../state/CartCountState';

function CartCard ({cartData}) {

  const [ cartCount, setCartCount ] = useRecoilState(CartCountState);
  const [cartDetailData, setCartDetailData] = useState(
    {
      id: cartData.id,
      quantity: cartData.quantity,
      price: 0,
      thumbnail: '',
      name: '',
    }
  );

  useEffect(() => {
    fetch(`http://localhost:3001/products/${cartData.productId}`).then(res => res.json()).then(data => {
      console.log(data)
      setCartDetailData({
        ...cartDetailData, 
        thumbnail: data.thumbnail,
        name: data.name,
        price: data.price
      })
    })
  },[cartDetailData]);

  const handleQuantityPatch = (quantity) => {
    fetch(`http://localhost:3001/carts/${cartDetailData.id}` ,{
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({quantity: quantity})
  }).then(res => res.json())
  .then(data => console.log(data))
}

  const handleQuantityIcre = () => {
    setCartDetailData({
      ...cartDetailData,
      quantity: cartDetailData.quantity + 1
    })
    handleQuantityPatch(cartDetailData.quantity + 1)
  }

  const handleQuantityDecre = () => {
    setCartDetailData({
      ...cartDetailData,
      quantity: cartDetailData.quantity - 1
    })
    handleQuantityPatch(cartDetailData.quantity - 1)
  }

  const handleDelete = () => {
    fetch(`http://localhost:3001/carts/${cartDetailData.id}`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    }).then(res => {
      res.json()
      if (res.ok) {
        setCartCount(cartCount - 1);
      }
    })
    .catch(err => console.log(err))
  }


  return (
    <div className={style.cartcard}>
      
        <div>
          <img src={cartDetailData.thumbnail} alt='' />
        </div>
        <div className={style.cartInfo}>
          <div>
            <p>{cartDetailData.name}</p>
            <p>{cartDetailData.price} 원</p>
          </div>
          <div className={style.qtyUi}>
            <p>
              <Button variant="outline-dark" onClick={handleQuantityDecre}>-</Button>
              {cartDetailData.quantity}
              <Button variant="outline-dark" onClick={handleQuantityIcre}>+</Button>
            </p>
            <p>
              <Button variant="outline-danger" onClick={handleDelete}>삭제</Button>
            </p>
          </div>
        </div>
    
    </div>
  );
}

export default CartCard;