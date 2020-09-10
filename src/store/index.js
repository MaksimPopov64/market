/* global window:false */

import {
  createStore,
  compose,
  combineReducers,
} from 'redux';

import cart from './cart/reducer';

const reducers = combineReducers({
  cart
});

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

export default createStore(reducers, enhancers);
