import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Title from './Title';

class AccountInfo extends Component {
	constructor(props) {
		super(props);

		this.handleClickBind = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();

		this.props.handleSubmit(this.refs);
	}

	render() {
		const inputClass = 'input-reset ba b--silver pa3 mv2 db br3 mh3';
		const formRowClass = "mt3 flex flex-row";

		const user = this.props.user;
		const isRoaster = this.props.roaster;
		const legendText = this.props.legend;
		const submitText = this.props.submitText;
		const showLogin = this.props.showLogin;

		return (
		    <form className="mw7 center w-100 h-100" onSubmit={this.handleClickBind}>
		    	<div className="ba br3 b--light-silver bs1 ph5 pb5 mt2 mb2 bg-white">
			    	{!isRoaster && <Link to="/" className="tc f1 b i pb4 black no-underline"><Title color="black"/></Link>}
			    	<legend className="center f2 pb4 blue fw1">{legendText}</legend>
		    		{!isRoaster &&
		    			<div className={formRowClass}>
		    				<input className={inputClass + ' w-40'} ref="firstName" placeholder="First Name" defaultValue={user === null ? "" : user.firstName} required />
		    				<input className={inputClass + ' w-40'} ref="lastName" placeholder="Last Name" defaultValue={user === null ? "" : user.lastName} required />
		    			</div>
		    		}
		    		{isRoaster &&
		    			<div className={formRowClass}>
		    				<input className={inputClass + ' w-100'} ref="name" placeholder="Name" defaultValue={user === null ? "" : user.name} required />
		    			</div>
		    		}
		    		<div className={formRowClass}>
		    			<input className={inputClass + ' w-100'} ref="phone" placeholder="Phone Number (##########)" defaultValue={user === null ? "" : user.phone} required />
		    		</div>
		    		<div className={formRowClass}>
		    			<input className={inputClass + ' w-100'} ref="email" placeholder="E-mail" defaultValue={user === null ? "" : user.email} required />
		    		</div>
		    		{!isRoaster &&
		    	        <div>
		    				<div className={formRowClass}>
		    					<input className={inputClass + ' w-100'} type="password" ref="password" placeholder="Password" />
		    				</div>
		    				<div className={formRowClass}>
		    					<input className={inputClass + ' w-100'} type="password" ref="confirmPassword" placeholder="Confirm Password" />
		    				</div>
		    			</div>
		    		}
		    		<div className={formRowClass}>
		    			<input className={inputClass + ' w-100'} ref="addressLine1" placeholder="Address Line 1" defaultValue={user === null ? "" : user.addressLine1} required />
		    		</div>
		    		<div className={formRowClass}>
		    			<input className={inputClass + ' w-100'} ref="addressLine2" placeholder="Address Line 2 (Optional)" defaultValue={user === null ? "" : user.addressLine2} />
		    		</div>
		    		<div className={formRowClass}>
		    			<input className={inputClass + ' w-100'} ref="city" placeholder="City or Town" defaultValue={user === null ? "" : user.addressCity} required />
						<input className={inputClass} ref="zipCode" placeholder="Zip Code" defaultValue={user === null ? "" : user.addressZip} required />
		    		</div>
		    		<div className={formRowClass}>
						<select className={inputClass + ' w-50 pointer'} ref="state" defaultValue={user === null ? "" : user.addressState} required>
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
						<select className={inputClass + ' w-50 pointer'} ref="country" defaultValue={user === null ? "" : user.addressCountry} required>
							<option value="United States">United States</option>
						</select>
		    		</div>
					<div className="mt3">
							<button className="f4 w-100 link pointer dim br1 ba bw1 pv3 mb2 white bg-green" type="submit">{submitText}</button>
							{showLogin && <div className="tc pv2">Already have an account?  <Link to="/login" title="Login">Log In</Link>!</div>}
					</div>
		    	</div>
		    </form>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.userReducer.user,
		roaster: state.roaster.roaster
	};
}

export default connect(mapStateToProps)(AccountInfo);
