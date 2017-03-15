import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    render() {
        const linkClass = 'link dib dim black mr3';
        const log = localStorage.getItem('token') !== null ?
            <Link to="/logout" className={linkClass} title="Logout">Logout</Link> :
            <Link to="/login" className={linkClass} title="Login">Login</Link>;

        return (
            <nav className="flex justify-between bg-lightest-blue shadow-2">
                    <Link to="/" className="f1-l link dim black flex items-center pa3" title="Home">Expresso</Link>
                <div className="flex-grow pa3 flex items-center">
                    <Link to="/" className={linkClass} title="Home">Home</Link>
                    <Link to="/about" className={linkClass} title="About">About</Link>
                    <Link to="/dashboard" className={linkClass} title="Dashboard">Dashboard</Link>
                    {log}
                </div>
            </nav>
        );
    }
};

export default Navigation;
