import { combineReducers } from "redux";
import products from "../data";
import * as productReducer from "./products";

const initialCartAllIds = ["Axe", "Hacksaw"];
const cartAllIds = (state = initialCartAllIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialCartById = { Axe: { quantity: 2 }, Hacksaw: { quantity: 1 } };
const cartById = (state = initialCartById, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const cartReducer = combineReducers({
  cartAllIds,
  cartById
});

// cart = {id: {productName: productQuantity}}
// const initialCart = { Axe: { Axe: 2 } };
// const cartReducer = (state = initialCart, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const reducer = combineReducers({
  products: productReducer.productReducer,
  cart: cartReducer
});

export const getProducts = state => productReducer.getProducts(state.products);

export const getCart = state => getCartinCart(state.products, state.cart);

export const getCartinCart = (products, cart) => {
  return cart.cartAllIds.map(productName => {
    const name = productName;
    const price = products.productById[productName].price;
    const quantity = cart.cartById[productName].quantity;
    const itemTotal = price * quantity;
    return { name, price, quantity, itemTotal };
  });
};

// const getCart = state => {
//   Object.keys(state.cart).map(cartItemKey => {
//     return { name: cartItemKey, price: state.products };
//   });
//   return [];
// };

export default reducer;
