import React from 'react';
import ReactDOM from 'react-dom';
import ReactDataGrid from 'react-data-grid';
import ReactDataGridPlugins from 'react-data-grid-addons';
import {Provider} from 'react-redux';
import {Router, Route, Redirect, IndexRedirect, IndexRoute, browserHistory} from 'react-router';
import App from './App';
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
import Subscribe from './components/dashboard/subscriptions/Subscribe';
import MessageContentContainer from './components/dashboard/bloodlines/MessageContentContainer';
import TriggerContainer from './components/dashboard/bloodlines/TriggerContainer';
import ReceiptContainer from './components/dashboard/bloodlines/ReceiptContainer';
import SubscriptionContainer from './components/dashboard/subscriptions/SubscriptionContainer';

import configureStore from './store/configureStore';
//import update from 'react-addons-update'; // ES6

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
        pathname: '/login',
        state: {nextPathname: nextState.location.pathname}
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

/**
 * Used to prevent authenticated users from accessing `/login`.
 */
function requireNoAuth(nextState, replace) {
    if (!loggedIn()) {
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
                <Route path="bloodlines" component={Bloodlines}>
                    <IndexRedirect to="content"/>
                    <Route path="content" component={MessageContentContainer}/>
                    <Route path="trigger" component={TriggerContainer}/>
                    <Route path="receipt" component={ReceiptContainer}/>
                    <Route path="preference"/>
                </Route>
                <Route path="roaster" component={Roaster} onEnter={requireRoaster}>
                    <IndexRedirect to="inventory"/>
                    <Route path="inventory" component={InventoryContainer}/>
                    <Route path="account" component={RoasterAccount}/>
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
            <Redirect from="*" to="/404"/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
