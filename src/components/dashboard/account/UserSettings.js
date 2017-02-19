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
										<input className={inputClass + ' w-40'} ref="first_name" />
										<label className={labelClass + ' pl3'}>Last Name</label>
										<input className={inputClass + ' w-40'} ref="last_name" />
									</div>
									<div className="mt3 pt3 flex flex-row">
										<label className={labelClass}>Phone Number</label>
										<input className={inputClass + ' w-100'} ref="phone" placeholder="XXXXXXXXXX" />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>Email</label>
										<input className={inputClass + ' w-100'} ref="email" />
									</div>
									<div className="mt3 pt3 flex flex-row">
										<label className={labelClass}>Address Line 1</label>
										<input className={inputClass + ' w-100'} ref="address_line_1" />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>Address Line 2</label>
										<input className={inputClass + ' w-100'} ref="address_line_2" />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>City</label>
										<input className={inputClass + ' w-100'} ref="address_city" />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>State</label>
										<input className={inputClass + ' w-40'} ref="address_state" />
										<label className={labelClass + ' pl3'}>Zip</label>
										<input className={inputClass + ' w-20'} ref="address_zip" />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>Country</label>
										<input className={inputClass + ' w-100'} ref="address_country" />
									</div>
									<div className="mt3 pt3 flex flex-row">
										<label className={labelClass}>Password</label>
										<input className={inputClass + ' w-100'} type="password" ref="password" />
									</div>
									<div className="mt3 flex flex-row">
										<label className={labelClass}>Confirm Password</label>
										<input className={inputClass + ' w-100'} type="password" ref="confirm_password" />
									</div>
							</div>
							<div className="mt3">
									(Note: Temporary)
									<button onClick={this.props.setButtonOne} className={btnClass + ' ml1 mr2'} type="submit">Create Info</button>
									<button onClick={this.props.setButtonTwo} className={btnClass} type="submit">Update Info</button>
							</div>
					</form>
			</main>
		);
	}
}

export default UserSettings;
