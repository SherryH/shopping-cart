import React from "react";

const Product = ({ name, price, addProduct }) => (
  <div className="productWrapper">
    <div>{name}</div>
    <div>{price}</div>
    <div>
      <button onClick={() => addProduct(name)}>Add</button>
    </div>
  </div>
);

export default Product;
