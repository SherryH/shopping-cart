import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants";

export const addProduct = id => ({
  type: ADD_PRODUCT,
  payload: id
});

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  payload: id
});
