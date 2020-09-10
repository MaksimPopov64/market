import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Main } from './components/Main.jsx';
import './app.scss';


import store from './store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Main} />
            <Route path="/filter" exact component={Main} />
        </Router>
    </Provider>
);

export default App;
