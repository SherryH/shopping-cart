import React from "react";
import { connect } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import { getCart, getCartTotal } from "../../reducers";

const Cart = ({ cart, cartTotal }) => (
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
    <div className="total">${cartTotal}</div>
  </React.Fragment>
);

const mapStateToProps = state => ({
  cart: getCart(state),
  cartTotal: getCartTotal(state)
});
export default connect(mapStateToProps)(Cart);
