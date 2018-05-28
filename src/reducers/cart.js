import { combineReducers } from "redux";

//state = [id1, id2]
const initialCartAllIds = ["Axe", "Hacksaw"];
const cartAllIds = (state = initialCartAllIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// state={id: {quantity: productQuantity}}
const initialCartById = { Axe: { quantity: 2 }, Hacksaw: { quantity: 1 } };
const cartById = (state = initialCartById, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const cart = combineReducers({
  cartAllIds,
  cartById
});

export const getCart = (products, cart) => {
  return cart.cartAllIds.map(productName => {
    const name = productName;
    const price = products.productById[productName].price;
    const quantity = cart.cartById[productName].quantity;
    const itemTotal = price * quantity;
    return { name, price, quantity, itemTotal };
  });
};

export const getCartTotal = (products, cart) => {
  return cart.cartAllIds.reduce((pre, cur) => {
    const price = products.productById[cur].price;
    const quantity = cart.cartById[cur].quantity;
    return pre + price * quantity;
  }, 0);
};
