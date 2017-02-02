import React, { Component } from 'react';
import { Link } from 'react-router';

class SidebarContent extends Component {
    render() {
        const btnClass = 'pointer bgn dim h2 tl';

        return (
            <div className="flex flex-column justify-between h-100">
                <div className="flex flex-column">
                    <Link to="/" className="link black no-underline pa3 f2 b" title="Home">Expresso</Link>
                    <button className={btnClass} onClick={this.props.onRoastersClick}>Browse Roasteries</button>
                    <button className={btnClass} onClick={this.props.onBloodlinesClick}>Bloodlines</button>
                </div>
                <div className="flex flex-column">
                    <button className={btnClass} onClick={this.props.onLogout}>Logout</button>
                </div>
            </div>
        );
    }
}

export default SidebarContent;
