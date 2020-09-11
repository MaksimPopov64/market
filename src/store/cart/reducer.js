import { combineReducers } from 'redux';

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREMENT_COUNT,
  CLEAR_CART,
  INCREMENT_COUNT,
} from './actions';

function items(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART: {
      const items = state;
      const item = payload;
      const isExist = items.find((one) => one.id === item.id);
      !isExist && items.push(item);
      return [...items.reverse()];
    }

    case REMOVE_ITEM: {
      let items = state;
      const item = payload;
      items = items.filter((product) => product.id !== item.id);

      return [...items];
    }

    case CLEAR_CART: {
      return [];
    }

    default:
      return state;
  }
}

function counters(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART: {
      const count = state[payload.id] > 0 ? state[payload.id] + 1 : 1;
      return { ...state, [payload.id]: count };
    }

    case DECREMENT_COUNT: {
      const count = state[payload.id] - 1;
      return { ...state, [payload.id]: count };
    }

    case INCREMENT_COUNT: {
      const count = state[payload.id] + 1;
      return { ...state, [payload.id]: count };
    }

    case REMOVE_ITEM: {
      return { ...state, [payload.id]: 0 };
    }

    case CLEAR_CART: {
      return {};
    }

    default:
      return state;
  }
}

export default combineReducers({
  items,
  counters,
});
