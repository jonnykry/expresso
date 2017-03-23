import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    render() {
        const linkClass = 'link dib dim white mr4 b';
        const dashClass = linkClass + ' pa3 b ba bw1';
        const isAuthed = localStorage.getItem('token') !== null;
        const logInOrLogOut = isAuthed ?
            <Link to="/logout" className={linkClass} title="Logout">Logout</Link> :
            <Link to="/login" className={linkClass} title="Login">Login</Link>;
        const dashOrRegister = isAuthed ?
            <Link to="/dashboard" className={dashClass} title="Dashboard">Dashboard</Link> : 
            <Link to="/register" className={dashClass} title="Register">Sign up Free</Link>;

        return (
            <nav className="flex justify-between bg-blue shadow-2">
                    <Link to="/" className="f1-l b i link dim white flex items-center pv3 ph5" title="Home">Expresso</Link>
                <div className="flex-grow pa3 pv5 flex items-center">
                    <Link to="/" className={linkClass} title="Home">Home</Link>
                    <Link to="/about" className={linkClass} title="About">About</Link>
                    {logInOrLogOut}
                    {dashOrRegister}
                </div>
            </nav>
        );
    }
};

export default Navigation;
