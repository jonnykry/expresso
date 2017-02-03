import React, { PropTypes, Component } from 'react';
import Navigation from './Navigation';

class Register extends Component {
    render() {
        const headerClass = "mt4 ph0 mh0 fw6";
        const labelClass = "mt3 db fw4 lh-copy f6";
        const inputClass = "pa2 input-reset ba bg-transparent w-100 border-box";
        const thirdInputClass = "w-100 pa2 input-reset ba bg-transparent border-box";

        return (
            <div>
                <Navigation isLogin={true} />
                <article className="pa4 mw4 mw6-ns center black-80">
                    <div className="f2 tc">Register / Sign-up</div>
                    <form onSubmit={this.props.handleSubmit.bind(this)} className="w-100">
                        <div className={headerClass}>Basic Info</div>
                        <label className={labelClass}>First Name</label>
                        <input className={inputClass} ref="firstName" name="first-name" id="first-name" />
                        <label className={labelClass}>Last Name</label>
                        <input className={inputClass} ref="lastName" name="last-name" id="last-name" />
                        <label className={labelClass}>E-mail</label>
                        <input className={inputClass} type="email" ref="email" name="e-mail" id="e-mail" />
                        <label className={labelClass}>Password</label>
                        <input className={inputClass} type="password" ref="password" name="password" id="password" />
                        <label className={labelClass}>Confirm Password</label>
                        <input className={inputClass} type="password" ref="confirmPassword" name="confirm-password" id="confirm-password" />
                        <div className={headerClass}>Shipping Info</div>
                        <label className={labelClass}>Phone</label>
                        <input className={inputClass} ref="phone" name="phone" id="phone" />
                        <label className={labelClass}>Address Line 1</label>
                        <input className={inputClass} ref="addressLineOne" name="address-line-one" id="address-line-one" />
                        <label className={labelClass}>Address Line 2 (optional)</label>
                        <input className={inputClass} ref="addressLineTwo" name="address-line-two" id="address-line-two" />
                        <div className="w-third dib pr3">
                            <label className={labelClass}>City</label>
                            <input className={thirdInputClass} ref="city" name="city" id="city" />
                        </div>
                        <div className="w-third dib pr3">
                            <label className={labelClass}>State</label>
                            <input className={thirdInputClass} ref="state" name="state" id="state" />
                        </div>
                        <div className="w-third dib">
                            <label className={labelClass}>Zip Code</label>
                            <input className={thirdInputClass} ref="zipCode" name="zip-code" id="zip-code" />
                        </div>
                        <label className={labelClass}>Country</label>
                        <input className={inputClass} ref="country" name="country" id="country" />
                        <div className="mt4"><input className="w-25 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit" /></div>
                        {this.props.error && (
                            <p>Bad login information</p>
                        )}
                    </form>
                </article>
            </div>
        );
    }
}

export default Register;
