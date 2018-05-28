import React from "react";

const Product = ({ name, price }) => (
  <div className="productWrapper">
    <div>{name}</div>
    <div>{price}</div>
    <div>
      <button>Add</button>
    </div>
  </div>
);

export default Product;
