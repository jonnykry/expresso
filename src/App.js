import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './components/Navigation';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="h-inherit">
                <Navigation isHome={this.props.isHome} />
                {this.props.children}
            </div>
        );
    }
}

export default connect()(App);
