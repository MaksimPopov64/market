import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Main } from './containers/main';
import { Cart } from './containers/cart';

import store from './store';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/cart" render={() => <Cart />} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
