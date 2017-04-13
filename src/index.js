import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Redirect, IndexRedirect, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import {getUserInfo} from './actions/userActions';
import ActionUtil from './actions/actionUtil';
import About from './components/About';
import NotFoundComponent from './components/NotFoundComponent';
import LoginContainer from './components/LoginContainer';
import Logout from './components/Logout';
import RegisterContainer from './components/RegisterContainer';
import ResetContainer from './components/ResetContainer';
import RequestResetContainer from './components/RequestResetContainer';
import DashboardContainer from './components/dashboard/DashboardContainer';
import Home from './components/Home';
import BrowseBeansContainer from './components/dashboard/browse/BrowseBeansContainer';
import InventoryContainer from './components/dashboard/inventory/InventoryContainer';
import Roaster from './components/dashboard/roaster/Roaster';
import BeanItemDetails from './components/dashboard/browse/BeanItemDetails';
import Bloodlines from './components/dashboard/bloodlines/Bloodlines';
import AccountSettings from './components/dashboard/account/AccountSettings';
import RoasterAccount from './components/dashboard/roaster/RoasterAccount';
import RoasterRegisterContainer from './components/RoasterRegisterContainer';
import SubscribeContainer from './components/dashboard/subscriptions/SubscribeContainer';
import MessageContentContainer from './components/dashboard/bloodlines/MessageContentContainer';
import TriggerContainer from './components/dashboard/bloodlines/TriggerContainer';
import ReceiptContainer from './components/dashboard/bloodlines/ReceiptContainer';
import SubscriptionContainer from './components/dashboard/subscriptions/SubscriptionContainer';
import RoasterSubscriptionContainer from './components/dashboard/roaster/subscriptions/RoasterSubscriptionContainer';
import RoasterSubscriptionDetails from './components/dashboard/roaster/subscriptions/RoasterSubscriptionDetails';

import configureStore from './store/configureStore';
//import update from 'react-addons-update'; // ES6

import 'tachyons/css/tachyons.css';
import './index.css';

const store = configureStore();

function loggedIn(cb) {
    const token = localStorage.getItem('token');
    return new Promise(resolve => {
        if (token === null) {
            resolve(false);
            return;
        }

        store.dispatch(getUserInfo()).then(() => {
            resolve(store.getState().userReducer.success);
        });
    });
}

function requireAuth(nextState, replace, callback) {
    loggedIn().then(success => {
        if (success) {
            callback();
            return;
        }
        store.dispatch(ActionUtil.resolveError());
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        });
        callback();
    });
}

function requireRoaster(nextState, replace, callback) {
    if (store.getState().roaster.roaster.id) {
        callback();
        return;
    }


    replace({
        pathname: '/dashboard',
        state: {nextPathname: nextState.location.pathname}
    });

    callback();
}

/**
 * Used to prevent authenticated users from accessing `/login`.
 */
function requireNoAuth(nextState, replace, callback) {
    loggedIn().then(success => {
        if (!success) {
            callback();
            return;
        }

        replace({
            pathname: '/dashboard',
            state: {nextPathname: nextState.location.pathname}
        });

        callback();
    });
}

/**
 * Used to prevent users from accessing `/bloodlines` from production.
 */
function requireDev(nextState, replace, callback) {
    if (process.env.NODE_ENV !== 'production') {
        callback();
        return;
    }

    replace({
        pathname: '/dashboard'
    });

    callback();
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} isHome>
                <IndexRoute component={Home}/>
                <Route path="about" component={About}/>
                <Route path="logout" component={Logout}/>
                <Route path="404" component={NotFoundComponent}/>
            </Route>
            <Route path="/register">
                <IndexRedirect to="user"/>
                <Route path="user" component={RegisterContainer}/>
                <Route path="roaster" component={RoasterRegisterContainer} onEnter={requireAuth}/>
            </Route>
            <Route path="/login" component={LoginContainer} onEnter={requireNoAuth}/>
            <Route path="/dashboard" component={DashboardContainer} onEnter={requireAuth}>
                <IndexRedirect to="browse"/>
                <Route path="browse" component={BrowseBeansContainer}/>
                <Route path="browse/:id" component={BeanItemDetails}/>
                <Route path="bloodlines" component={Bloodlines} onEnter={requireDev}>
                    <IndexRedirect to="content"/>
                    <Route path="content" component={MessageContentContainer}/>
                    <Route path="trigger" component={TriggerContainer}/>
                    <Route path="receipt" component={ReceiptContainer}/>
                    <Route path="preference"/>
                </Route>
                <Route path="roaster" component={Roaster} onEnter={requireRoaster}>
                    <IndexRedirect to="subscriptions"/>
                    <Route path="inventory" component={InventoryContainer}/>
                    <Route path="subscriptions" component={RoasterSubscriptionContainer}/>
                    <Route path="subscriptions/:id" component={RoasterSubscriptionDetails}/>
                    <Route path="account" component={RoasterAccount}/>
                </Route>
                <Route path="subscriptions" component={SubscriptionContainer}/>
                <Route path="subscribe/:id" component={SubscribeContainer}/>
                <Route path="settings" component={AccountSettings}/>
            </Route>
            <Route path="reset">
                <IndexRoute component={RequestResetContainer}/>
                <Route path=":token" component={ResetContainer}/>
            </Route>
            <Redirect from="*" to="/404"/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
