import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { CartCountState } from "../state/CartCountState";

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
    <div className="card">
      <li key={cartData.id}>
              <img src={cartData.thumbnail} alt='' />
              <p>{cartData.name}</p>
              <p>{cartData.price} 원</p>
              <button onClick={handleQuantityDecre}>-</button>
              <p>{cartData.quantity}</p>
              <button onClick={handleQuantityIcre}>+</button>
              <button onClick={handleDelete}>삭제</button>
            </li>
    </div>
  );
}

export default CartCard;