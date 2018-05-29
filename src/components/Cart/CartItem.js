import React from "react";
import Cart from ".";

const CartItem = ({ name, price, quantity, itemTotal, removeProduct }) => (
  <div className="cartWrapper">
    <div>{name}</div>
    <div>${price}</div>
    <div>x{quantity}</div>
    <div>= {itemTotal}</div>
    <div>
      <button onClick={() => removeProduct(name)}>Remove</button>
    </div>
  </div>
);

export default CartItem;
