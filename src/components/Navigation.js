import React, { Component } from 'react';
import { Link } from 'react-router';

import Title from './Title';

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
                    <Link to="/" className="link flex items-center" title="Home">
                        <Title color="white"/>
                    </Link>
                <div className="flex-grow pa3 pv4 flex items-center">
                    <Link to="/" className={linkClass} title="Home">Home</Link>
                    <Link to="/about" className={linkClass} title="About">About</Link>
                    <Link to="/register/roaster" className={linkClass} title="">Roaster Account</Link>
                    {logInOrLogOut}
                    {dashOrRegister}
                </div>
            </nav>
        );
    }
};

export default Navigation;
