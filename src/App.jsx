import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'history';
import { Main } from './containers/main';
import { Cart } from './containers/cart';

import store from './store';

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/cart" render={() => <Cart />} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
