import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="h-100">
                <Navigation isHome={this.props.isHome}/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    isHome: PropTypes.bool
};

export default connect()(App);
