import React, { PropTypes, Component } from 'react';
import Navigation from './Navigation';

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
        const pass = this.refs.pass.value;

        // TODO:  Handle login on server and password correctly
        this.setState({
            error: true
        });
    }

    render() {
        return (
            <div>
            <Navigation isLogin={true} />
                <article className="pa4 black-80">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6">E-mail address</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" ref="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent" type="password" ref="password" name="password"id="password" />
                        </div>
                        <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Log In" /></div>
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
