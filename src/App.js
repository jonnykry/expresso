import React, { Component } from 'react';
import Navigation from './components/Navigation';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="h-inherit">
                <Navigation isHome={this.props.isHome} isLogin={this.props.isLogin}/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
