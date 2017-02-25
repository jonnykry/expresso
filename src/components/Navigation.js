import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    render() {
        const linkClass = 'link dib dim black mr3 pl3-ns';

        return (
            <nav className="flex justify-between bg-lightest-blue shadow-2">
                    <Link to="/" className="f1-l link dim black flex items-center pa3" title="Home">Expresso</Link>
                <div className="flex-grow pa3 flex items-center">
                    <Link to="/" className={linkClass} title="Home">Home</Link>
                    <Link to="/about" className={linkClass + ' bl'} title="About">About</Link>
                    <Link to="/dashboard" className={linkClass + ' bl'} title="Dashboard">Dashboard</Link>
                    <Link to="/login" className={linkClass + ' bl'} title="Login">Login</Link>
                </div>
            </nav>
        );
    }
};

export default Navigation;
