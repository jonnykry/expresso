import React, {Component, PropTypes} from 'react';

import ErrorMessage from './ErrorMessage';
import Title from './Title';

class RequestReset extends Component {
    render() {
        const inputClass = 'mt3 pa3 input-reset ba b--white w-100 border-box br3';
        const display = this.props.modify.success ?
            <div className="mt3 light-gray tc f7">You should be receiveing an email soon.</div> :
            <form onSubmit={this.props.onHandleSubmit} className="w-100">
                <input className={inputClass} type="email" ref={this.props._email} placeholder="coffee@expresso.store" name="email" id="email"/>
                <div className="mt3"><input className="w-100 pointer ba b--transparent white br3 bg-green pv3" type="submit" value="Request"/></div>
                <ErrorMessage error={this.props.error}/>
            </form>;

        return (
            <div className="bg-blue h-100">
                <article className="h-100 bg-blue pa4 mw4 mw6-ns center white">
                    <Title color="white" />
                    <div className="f2 tc">Request Reset Email</div>
                    {display}
                </article>
            </div>
        );
    }
}

RequestReset.propTypes = {
    onHandleSubmit: PropTypes.func,
    _email: PropTypes.func,
    error: PropTypes.string,
    modify: PropTypes.object
};

export default RequestReset;

