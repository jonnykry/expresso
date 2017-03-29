import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import ErrorMessage from './ErrorMessage';
import Title from './Title';

class ResetToken extends Component {
    render() {
        const inputClass = 'mt3 pa3 input-reset ba b--white w-100 border-box br3';

        return (
            <div className="bg-blue h-100">
                <article className="h-100 bg-blue pa4 mw4 mw6-ns center white">
                    <Link to="/" className="pointer tc f1 b i white no-underline"><Title color="white"/></Link>
                    <div className="f2 tc">Reset Password</div>
                    <form onSubmit={this.props.onHandleSubmit} className="w-100">
                        <input className={inputClass} type="password" ref={this.props._pass} placeholder="Password" name="password" id="password"/>
                        <input className={inputClass} type="password" ref={this.props._confirm} placeholder="Confirm Password" name="confirm" id="confim"/>
                        <div className="mt3"><input className="w-100 pointer ba b--transparent white br3 bg-green pv3" type="submit" value="Request"/></div>
                        <ErrorMessage error={this.props.error}/>
                    </form>
                </article>
            </div>
        );
    }
}

ResetToken.propTypes = {
    onHandleSubmit: PropTypes.func,
    _pass: PropTypes.func,
    _confirm: PropTypes.func,
    error: PropTypes.string
};

export default ResetToken;
