import React from "react";
import { connect } from "react-redux";
import "./ProductList.css";
import Product from "./Product";

const ProductList = ({ products }) => (
  <React.Fragment>
    <h2>Product List</h2>
    {products.map(({ name, price }) => <Product name={name} price={price} />)}
  </React.Fragment>
);

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps)(ProductList);
