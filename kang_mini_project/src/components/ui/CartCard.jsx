import React from "react";
import { useRecoilState } from "recoil";
import { CartCountState } from "../state/CartCountState";
import style from "./CartCard.module.css";
import  Button  from 'react-bootstrap/Button';





function CartCard ({cartData}) {

  const [cartQuantity, setCartQuantity] = useRecoilState(CartCountState)

  const handleQuantityPatch = (quantity) => {
    fetch(`http://localhost:3001/carts/${cartData.id}` ,{
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({quantity: quantity})
  }).then(res => res.json())
  .then(data => console.log(data))
}

  const handleQuantityIcre = () => {
    setCartQuantity(cartQuantity + 1)
    handleQuantityPatch(cartQuantity + 1)
  }

  const handleQuantityDecre = () => {
    setCartQuantity(cartQuantity - 1)
    handleQuantityPatch(cartQuantity - 1)
  }

  const handleDelete = () => {
    fetch(`http://localhost:3001/carts/${cartData.id}`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
  }

    

  return (
    <div className={style.cartcard}>
      <li key={cartData.id}>
        <div>
          <img src={cartData.thumbnail} alt='' />
        </div>
        <div className={style.cartInfo}>
          <div>
            <p>{cartData.name}</p>
            <p>{cartData.price} 원</p>
          </div>
          <div className={style.qtyUi}>
            <Button variant="dark" onClick={handleQuantityDecre}>-</Button>
            <p>{cartData.quantity}</p>
            <Button variant="dark" onClick={handleQuantityIcre}>+</Button>
            <Button variant="outline-danger" onClick={handleDelete}>삭제</Button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default CartCard;