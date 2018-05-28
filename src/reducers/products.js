import { combineReducers } from "redux";
import products from "../data";

// product ID is the product name in this case
const initialProductById = (function() {
  const state = {};
  products.forEach(product => (state[product.name] = product));
  return state;
})();
const productById = (state = initialProductById, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialProductAllIds = products.map(product => product.name);
const productAllIds = (state = initialProductAllIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// product = [{name:{name: productName, price: productPrice}}]
// const initialProducts = products;
export const productReducer = combineReducers({
  productById,
  productAllIds
});

export const getProducts = products => {
  return products.productAllIds.map(key => products.productById[key]);
};
