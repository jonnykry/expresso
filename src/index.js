import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import LoginContainer from './components/LoginContainer';
import Logout from './components/Logout';
import RegisterContainer from './components/RegisterContainer';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home';
import Bloodlines from './components/dashboard/bloodlines/Bloodlines';
import AccountSettings from './components/dashboard/account/AccountSettings';
import RoasterAccount from './components/dashboard/roaster/RoasterAccount';
import RoasterRegisterContainer from './components/dashboard/roaster/RoasterRegisterContainer';
import MessageContentContainer from './components/dashboard/bloodlines/MessageContentContainer';
import TriggerContainer from './components/dashboard/bloodlines/TriggerContainer';

import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

import 'tachyons/css/tachyons.css';
import './index.css';

const store = configureStore();

function loggedIn() {
    // return store.getState().userReducer.user !== '';
    return true;
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    }
}


// TODO:  Index redirect for roaster is dependent on roaster account
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} isHome={true}>
                <IndexRoute component={Home}/>
                <Route path="about" component={About} />
                <Route path="login" component={LoginContainer} />
                <Route path="logout" component={Logout} />
                <Route path="register" component={RegisterContainer} />
                <Route path="dashboard" component={Dashboard} onEnter={requireAuth}>
                    <IndexRedirect to="bloodlines" />
                    <Route path="bloodlines" component={Bloodlines}>
                        <IndexRedirect to="content" />
                        <Route path="content" component={MessageContentContainer}/>
                        <Route path="trigger" component={TriggerContainer}/>
                        <Route path="receipt" component={null}/>
                        <Route path="preference" component={null}/>
                    </Route>
                    <Route path="roaster">
                        <IndexRedirect to="account" />
                        <Route path="account" component={RoasterAccount} />
                        <Route path="register" component={RoasterRegisterContainer} />
                    </Route>
                    <Route path="settings" component={AccountSettings} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
