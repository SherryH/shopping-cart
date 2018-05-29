import React from "react";
import PropTypes from "prop-types";

const Product = ({ name, price, addProduct }) => (
  <div className="productWrapper">
    <div>{name}</div>
    <div>{price}</div>
    <div>
      <button onClick={() => addProduct(name)}>Add</button>
    </div>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default Product;
