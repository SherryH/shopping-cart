import React from "react";
import "./Cart.css";

const Cart = () => (
  <React.Fragment>
    <h2>Checkout Cart</h2>
    <div className="cartWrapper">
      <div>Axe</div>
      <div>$190.50</div>
      <div>x2</div>
      <div>= 381.00</div>
      <div>
        <button>Remove</button>
      </div>
    </div>
    <h2>Total</h2>
    <div className="total">$380.00</div>
  </React.Fragment>
);

export default Cart;
