const MODULE = 'APP/CART';

export const ADD_TO_CART = `${MODULE}/ADD_TO_CART`;
export const REMOVE_ITEM = `${MODULE}/REMOVE_ITEM`;
export const DECREMENT_COUNT = `${MODULE}/DECREMENT_COUNT`;
export const CLEAR_CART = `${MODULE}/CLEAR_CART`;
export const INCREMENT_COUNT = `${MODULE}/INCREMENT_COUNT`;

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
});

export const decrementCount = (item) => ({
    type: DECREMENT_COUNT,
    payload: item
});

export const incrementCount = (item) => ({
    type: INCREMENT_COUNT,
    payload: item
});

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: CLEAR_CART,
});