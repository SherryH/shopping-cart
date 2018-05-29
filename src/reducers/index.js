import { combineReducers } from "redux";
import * as productReducer from "./products";
import * as cartReducer from "./cart";

const reducer = combineReducers({
  products: productReducer.products,
  cart: cartReducer.cart
});

export const getProducts = state => productReducer.getProducts(state.products);

export const getCart = state => cartReducer.getCart(state.products, state.cart);

export const getCartTotal = state =>
  cartReducer.getCartTotal(state.products, state.cart);

export default reducer;
