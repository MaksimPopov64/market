import { createStore, compose, combineReducers } from "redux";

import cart from "./cart/reducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedStore = loadState();

const reducers = combineReducers({
  cart,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f);

const store = createStore(reducers, persistedStore, enhancers);

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export default store;
