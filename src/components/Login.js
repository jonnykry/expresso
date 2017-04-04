import React, { Component } from 'react';
import { Link } from 'react-router';

import ErrorMessage from './ErrorMessage';
import Title from './Title';

class Login extends Component {
    render() {
        const inputClass = "mt3 pa3 input-reset ba b--white w-100 border-box br3";

        return (
            <div className="bg-blue h-100">
                <article className="h-100 bg-blue pa4 mw4 mw6-ns center white">
                    <Link to="/" className="pointer tc f1 b i white no-underline"><Title color="white"/></Link>
                    <div className="f2 tc">Log in</div>
                    <form onSubmit={this.props.onHandleSubmit.bind(this)} className="w-100">
                        <input className={inputClass} ref="email" placeholder="E-mail" name="e-mail" id="e-mail" />
                        <input className={inputClass} type="password" ref="password" placeholder="Password" name="password" id="password" />
                        <div className="mt3"><input className="w-100 pointer ba b--transparent white br3 bg-green pv3" type="submit" value="Log In" /></div>
                        <div className="mt3 light-gray tc f7">Not a user?  Click Here to <Link to="/register" className="f6 link dib dim mr3 mr4-ns" title="Register">Sign up</Link></div>
                        <div className="mt3 light-gray tc f7"><Link to="/reset" className="f6 link dib dim mr3 mr4-ns" title="Register">Forgot your password?</Link></div>
                        <ErrorMessage errors={this.props.errors}/>
                    </form>
                </article>
            </div>
        );
    }
}

export default Login;
