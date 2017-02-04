import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import LoginContainer from './components/LoginContainer';
import Logout from './components/Logout';
import RegisterContainer from './components/RegisterContainer';
import Dashboard from './components/dashboard/Dashboard';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

import 'tachyons/css/tachyons.css';
import './index.css';

const store = configureStore();

function loggedIn() {
    // TODO:  Fix auth.  This will soon be done by checking if there exists a valid user ID in appstate.
    // There are a lot of unknowns here, as of now.

    return true;
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
