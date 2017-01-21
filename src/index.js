import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Bloodlines from './components/Bloodlines'

import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

import 'tachyons/css/tachyons.css';
import './index.css';

const store = configureStore();

function loggedIn() {
    return false;
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
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
            <Route path="/bloodlines" component={Bloodlines}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
