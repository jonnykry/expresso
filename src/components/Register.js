import React, { Component } from 'react';

import ErrorMessage from './ErrorMessage';

class Register extends Component {
    render() {
        const headerClass = "mt4 ph0 mh0 fw6";
        const labelClass = "mt3 db fw4 lh-copy f6";
        const inputClass = "pa2 input-reset ba bg-transparent w-100 border-box";
        const thirdInputClass = "w-100 pa2 input-reset ba bg-transparent border-box";

        return (
            <div>
                <article className="pa4 mw4 mw6-ns center black-80">
                    <div className="f2 tc">Register / Sign-up</div>
                    <form onSubmit={this.props.onHandleSubmit.bind(this)} className="w-100">
                        <div className={headerClass}>Basic Info</div>
                        <label className={labelClass}>First Name</label>
                        <input className={inputClass} ref="firstName" name="first-name" id="first-name" required />
                        <label className={labelClass}>Last Name</label>
                        <input className={inputClass} ref="lastName" name="last-name" id="last-name" required />
                        <label className={labelClass}>E-mail</label>
                        <input className={inputClass} type="email" ref="email" name="e-mail" id="e-mail" required />
                        <label className={labelClass}>Password</label>
                        <input className={inputClass} type="password" ref="password" name="password" id="password" required />
                        <label className={labelClass}>Confirm Password</label>
                        <input className={inputClass} type="password" ref="confirmPassword" name="confirm-password" id="confirm-password" required />
                        <div className={headerClass}>Shipping Info</div>
                        <label className={labelClass}>Phone</label>
                        <input className={inputClass} type="tel" ref="phone" name="phone" id="phone" required />
                        <label className={labelClass}>Address Line 1</label>
                        <input className={inputClass} ref="addressLineOne" name="address-line-one" id="address-line-one" required />
                        <label className={labelClass}>Address Line 2 (optional)</label>
                        <input className={inputClass} ref="addressLineTwo" name="address-line-two" id="address-line-two" />
                        <div className="w-third dib pr3">
                            <label className={labelClass}>City</label>
                            <input className={thirdInputClass} ref="city" name="city" id="city" required />
                        </div>
                        <div className="w-third dib pr3">
                            <label className={labelClass}>State</label>
                            <select className={inputClass} ref="state" required>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="w-third dib">
                            <label className={labelClass}>Zip Code</label>
                            <input className={thirdInputClass} ref="zipCode" name="zip-code" id="zip-code" required />
                        </div>
                        <label className={labelClass}>Country</label>
                        <select className={inputClass} ref="country" name="country" required>
                            <option value="United States">United States</option>
                        </select>
                        <div className="mt4"><input className="w-25 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit" required /></div>
                        <ErrorMessage error={this.props.error} />
                    </form>
                </article>
            </div>
        );
    }
}

export default Register;
