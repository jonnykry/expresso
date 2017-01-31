import React, { Component } from 'react';

import Bloodlines from './bloodlines/Bloodlines';
import Navigation from '../Navigation';

class Dashboard extends Component {
    render() {
        return (
          <div>
            <Navigation />
            <div className="dashboard">
                <div className="main-content">
                    <Bloodlines />
                </div>
            </div>
          </div>
        );
    }
}

export default Dashboard;
