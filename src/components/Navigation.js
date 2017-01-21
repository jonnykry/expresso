import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="flex justify-between bb">
                <Link to="/" className="link no-underline flex items-center pa3" title="Home">Expresso</Link>
                <div className="flex-grow pa3 flex items-center">
                    <Link to="/" className="f6 link dib dim mr3 mr4-ns" title="Home">Home</Link>
                    <Link to="/about" className="f6 link dib dim mr3 mr4-ns" title="About">About</Link>
                    <Link to="/login" className="f6 link dib dim mr3 mr4-ns" title="Login">Login</Link>
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
