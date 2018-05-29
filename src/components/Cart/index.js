import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import { getCart, getCartTotal } from "../../reducers";
import { removeProduct } from "../../actions";

const Cart = ({ cart, cartTotal, removeProduct }) => (
  <React.Fragment>
    <h2>Checkout Cart</h2>
    {cart.map(({ name, price, quantity, itemTotal }) => (
      <CartItem
        key={name}
        name={name}
        price={price}
        quantity={quantity}
        itemTotal={itemTotal}
        removeProduct={removeProduct}
      />
    ))}
    <h2>Total</h2>
    <div className="total">${cartTotal}</div>
  </React.Fragment>
);

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
      itemTotal: PropTypes.string
    })
  ),
  cartTotal: PropTypes.string,
  removeProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: getCart(state),
  cartTotal: getCartTotal(state)
});
export default connect(mapStateToProps, { removeProduct })(Cart);
