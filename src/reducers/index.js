import { combineReducers } from "redux";
import products from "../data";

// product = [{id: {name: productName, price: productPrice}}]
const initialProducts = products;

const productReducer = (state = initialProducts, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// cart = {id: {productName: productQuantity}}
const initialCart = { 2: { Axe: 2 } };
const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

export default reducer;
