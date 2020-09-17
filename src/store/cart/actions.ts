const MODULE = "APP/CART";

export const ADD_TO_CART = `${MODULE}/ADD_TO_CART`;
export const REMOVE_ITEM = `${MODULE}/REMOVE_ITEM`;
export const DECREMENT_COUNT = `${MODULE}/DECREMENT_COUNT`;
export const CLEAR_CART = `${MODULE}/CLEAR_CART`;
export const INCREMENT_COUNT = `${MODULE}/INCREMENT_COUNT`;

export const addToCart = (item: object) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const decrementCount = (item: object) => ({
  type: DECREMENT_COUNT,
  payload: item,
});

export const incrementCount = (item: object) => ({
  type: INCREMENT_COUNT,
  payload: item,
});

export const removeItem = (item: object) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
