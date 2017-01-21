import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        // TODO:  Salt/Hash before sending
        const passHash = password;

        const data ={
            email, passHash
        };

        // TODO:  Update with User URL
        fetch('http://bloodlines.expresso.store/api/content', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            // TODO: Authenticate and send to dashboard
            alert(result);
        })
        .catch (function (error) {
            console.log('Request failed', error);
        });

        this.setState({
            error: true
        });
    }

    render() {
        const labelClass = "mt3 db fw4 lh-copy f6";
        const inputClass = "pa2 input-reset ba bg-transparent w-100 border-box";

        return (
            <div>
                <Navigation isLogin={true} />
                <article className="pa4 mw4 mw6-ns center black-80">
                    <div className="f2 tc">Log In</div>
                    <form onSubmit={this.handleSubmit.bind(this)} className="w-100">
                        <label className={labelClass}>E-mail</label>
                        <input className={inputClass} ref="email" name="e-mail" id="e-mail" />
                        <label className={labelClass}>Password</label>
                        <input className={inputClass} type="password" ref="password" name="password" id="password" />
                        <div className="mt4"><input className="w-25 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Log In" /></div>
                        <div className="mt3">Not a user?  <Link to="/register" className="f6 link dib dim mr3 mr4-ns" title="Register">Click here to sign up!</Link></div>
                        {this.state.error && (
                            <p>Bad login information</p>
                        )}
                    </form>
                </article>
            </div>
        );
    }
}

export default Login;
