import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="pa3 pa4-ns">
                <Link to="/" className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" title="Home">Expresso</Link>
                <div className="tc pb3">
                    <Link to="/" className="link dim gray f6 f5-ns dib mr3" title="Home">Home</Link>
                    <Link to="/about" className="link dim gray f6 f5-ns dib mr3" title="About">About</Link>
                    <Link to="/dashboard" className="link dim gray f6 f5-ns dib mr3" title="Dashboard">Dashboard</Link>
                    <Link to="/login" className="link dim gray f6 f5-ns dib mr3" title="Login">Login</Link>
                    <Link to="/bloodlines" className="link dim gray f6 f5-ns dib mr3" title="Bloodlines">Bloodlines</Link>
                </div>
            </nav>
        );
    }
}

Navigation.propTypes = {
    isHome: PropTypes.bool,
    isDashboard: PropTypes.bool,
    isLogin: PropTypes.bool
};

export default Navigation;
