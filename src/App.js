import React, { Component } from 'react';
import Navigation from './components/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Navigation isHome={true} />
            <div className="mw9 center ph3-ns">
                <div className="ph2-ns">
                    <div className="fl w-100 pa2">
                        <div className="tc pv4"><code>Welcome to the Expresso web application!</code></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
