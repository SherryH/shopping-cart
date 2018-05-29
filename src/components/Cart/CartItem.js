import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ name, price, quantity, itemTotal, removeProduct }) => (
  <div className="cartWrapper">
    <div>{name}</div>
    <div>${price}</div>
    <div>x{quantity}</div>
    <div>= ${itemTotal}</div>
    <div>
      <button onClick={() => removeProduct(name)}>Remove</button>
    </div>
  </div>
);

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  itemTotal: PropTypes.string.isRequired,
  removeProduct: PropTypes.func.isRequired
};

export default CartItem;
