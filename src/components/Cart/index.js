import React from "react";
import { connect } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import { getCart } from "../../reducers";

const Cart = ({ cart }) => (
  <React.Fragment>
    <h2>Checkout Cart</h2>
    {cart.map(({ name, price, quantity, itemTotal }) => (
      <CartItem
        name={name}
        price={price}
        quantity={quantity}
        itemTotal={itemTotal}
      />
    ))}
    <h2>Total</h2>
    <div className="total">$380.00</div>
  </React.Fragment>
);

const mapStateToProps = state => ({
  cart: getCart(state)
});
export default connect(mapStateToProps)(Cart);
