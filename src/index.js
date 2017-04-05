import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import About from './components/About';
import LoginContainer from './components/LoginContainer';
import Logout from './components/Logout';
import RegisterContainer from './components/RegisterContainer';
import ResetContainer from './components/ResetContainer';
import RequestResetContainer from './components/RequestResetContainer';
import DashboardContainer from './components/dashboard/DashboardContainer';
import Home from './components/Home';
import BrowseBeansContainer from './components/dashboard/browse/BrowseBeansContainer';
import BeanItemDetails from './components/dashboard/browse/BeanItemDetails';
import Bloodlines from './components/dashboard/bloodlines/Bloodlines';
import AccountSettings from './components/dashboard/account/AccountSettings';
import RoasterAccount from './components/dashboard/roaster/RoasterAccount';
import RoasterRegisterContainer from './components/dashboard/roaster/RoasterRegisterContainer';
import Subscribe from './components/dashboard/subscriptions/Subscribe';
import MessageContentContainer from './components/dashboard/bloodlines/MessageContentContainer';
import TriggerContainer from './components/dashboard/bloodlines/TriggerContainer';
import ReceiptContainer from './components/dashboard/bloodlines/ReceiptContainer';
import SubscriptionContainer from './components/dashboard/subscriptions/SubscriptionContainer';

import configureStore from './store/configureStore';

import 'tachyons/css/tachyons.css';
import './index.css';

const store = configureStore();

function loggedIn() {
    return localStorage.getItem('token') !== null;
}

function requireAuth(nextState, replace) {
    if (loggedIn()) {
        return;
    }

    replace({
        pathname: '/login'
    });
}

function requireRoaster(nextState, replace) {
    if (store.getState().roaster.roaster) {
        return;
    }

    replace({
        pathname: '/dashboard'
    });
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} isHome>
                <IndexRoute component={Home}/>
                <Route path="about" component={About}/>
                <Route path="logout" component={Logout}/>
            </Route>
            <Route path="/register" component={RegisterContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/dashboard" component={DashboardContainer} onEnter={requireAuth}>
                <IndexRedirect to="browse"/>
                <Route path="browse" component={BrowseBeansContainer}/>
                <Route path="browse/:id" component={BeanItemDetails}/>
                <Route path="bloodlines" component={Bloodlines}>
                    <IndexRedirect to="content"/>
                    <Route path="content" component={MessageContentContainer}/>
                    <Route path="trigger" component={TriggerContainer}/>
                    <Route path="receipt" component={ReceiptContainer}/>
                    <Route path="preference"/>
                </Route>
                <Route path="roaster" onEnter={requireRoaster}>
                    <IndexRedirect to="account"/>
                    <Route path="account" component={RoasterAccount}/>
                    <Route path="register" component={RoasterRegisterContainer}/>
                </Route>
                <Route path="subscriptions" component={SubscriptionContainer}>
                    <Route path="subscribe/:id" component={Subscribe}/>
                </Route>
                <Route path="settings" component={AccountSettings}/>
            </Route>
            <Route path="reset">
                <IndexRoute component={RequestResetContainer}/>
                <Route path=":token" component={ResetContainer}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
