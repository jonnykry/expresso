import React, { PropTypes, Component } from 'react';

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
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label><input ref="firstName" placeholder="First Name" /></label>
                    <label><input ref="lastName" placeholder="Last Name" /></label>
                    
                    <label><input ref="pass" placeholder="password" /></label><br />
                    <label><input ref="pass" placeholder="password" /></label><br />
                    <label><input ref="pass" placeholder="password" /></label><br />
                    <button type="submit">login</button>
                    {this.state.error && (
                        <p>Bad login information</p>
                    )}
                </form>
            </div>
        );
    }
}

export default Login;
