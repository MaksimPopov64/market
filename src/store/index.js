/* global window:false */

import {
  createStore,
  compose,
  combineReducers,
} from 'redux';

const reducers = combineReducers({

});

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

export default createStore(reducers, enhancers);
