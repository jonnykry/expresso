import React, { Component } from 'react';

class UserSettings extends Component {
	render() {
		const inputClass = 'input-reset ba pa2 mb2 db';
		const labelClass = 'fw4 lh-copy f6 pr3 pt2 nowrap lh-solid'
		const btnClass = 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6';

		return (
			<main className="pa4 black-80">
					<form className="measure center" onSubmit={this.props.handleSubmit.bind(this)}>
							<legend className="f4 fw6">Update User Details</legend>
							<div className="ba pa4 mt2 mb2">
									<div className="mt3 flex flex-row">
										<label className={labelClass}>First Name</label>
										<input className={inputClass + ' w-40'} ref="firstName" required />
										<label className={labelClass + ' pl3'}>Last Name</label>
										<input className={inputClass + ' w-40'} ref="lastName" required />
									</div>
									<div className="mt3 pt3 flex flex-row">
										<label className={labelClass}>Phone Number</label>
										<input className={inputClass + ' w-100'} ref="phone" placeholder="XXXXXXXXXX" required />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>Email</label>
										<input className={inputClass + ' w-100'} ref="email" required />
									</div>
									<div className="mt3 pt3 flex flex-row">
										<label className={labelClass}>Password</label>
										<input className={inputClass + ' w-100'} type="password" ref="password" />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>Confirm Password</label>
										<input className={inputClass + ' w-100'} type="password" ref="confirmPassword" />
									</div>
									<div className="mt3 pt3 flex flex-row">
										<label className={labelClass}>Address Line 1</label>
										<input className={inputClass + ' w-100'} ref="addressLine1" required />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>Address Line 2 (Optional)</label>
										<input className={inputClass + ' w-100'} ref="addressLine2" />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>City</label>
										<input className={inputClass + ' w-100'} ref="city" required />
									</div>
									<div className="mt3 flex flex-row">
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
										<label className={labelClass + ' pl3'}>Zip</label>
										<input className={inputClass + ' w-20'} ref="zipCode" required />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>Country</label>
										<select className={inputClass} ref="country" required>
											<option value="United States">United States</option>
										</select>
									</div>
							</div>
							<div className="mt3">
									<button className={btnClass + ' ml1 mr2'} type="submit">Update Info</button>
							</div>
					</form>
			</main>
		);
	}
}

export default UserSettings;
