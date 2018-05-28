import { combineReducers } from "redux";
import productsData from "../data";

// product ID is the product name in this case
// state = {[id]:{name: productName, price: productPrice}}
const initialProductById = (function() {
  const state = {};
  productsData.forEach(product => (state[product.name] = product));
  return state;
})();
const productById = (state = initialProductById, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// state = [id1, id2]
const initialProductAllIds = productsData.map(product => product.name);
const productAllIds = (state = initialProductAllIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const products = combineReducers({
  productById,
  productAllIds
});

export const getProducts = products => {
  return products.productAllIds.map(key => products.productById[key]);
};
