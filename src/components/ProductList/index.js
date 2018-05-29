import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ProductList.css";
import Product from "./Product";
import { getProducts } from "../../reducers";
import { addProduct } from "../../actions";

const ProductList = ({ products, addProduct }) => (
  <React.Fragment>
    <h2>Product List</h2>
    {products.map(({ name, price }) => (
      <Product key={name} name={name} price={price} addProduct={addProduct} />
    ))}
  </React.Fragment>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ),
  addProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { products: getProducts(state) };
};

export default connect(mapStateToProps, { addProduct })(ProductList);
