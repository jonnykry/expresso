import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import Select from 'react-select';

class Subscription extends Component {
	render () {
		const item = this.props.item;
		const frequencyOptions = [
			{ value: 'MONTHLY', label: 'Monthly' },
			{ value: 'TRIMONTHLY', label: 'Trimonthly' },
			{ value: 'BIMONTHLY', label: 'Bimonthly' },
			{ value: 'WEEKLY', label: 'Weekly' }
		];
		const btnClass = 'pointer dim br1 ba bw1 tc ph2 pv2 black';
		const statusLabel = item.status === 'ACTIVE' ? 'Deactivate' : 'Activate';

		console.log(item);

		return (
			<div className="mw7 flex center bl br bt bb mb2 pa2">
				<Link className="ph4" to={'/dashboard/browse/' + item.itemId}>View Subscription Item Details</Link>
				<div className="w-25 pt2"># Bags: {item.quantity}</div>
				<Select className="w-50 mr3"
						options={frequencyOptions}
						simpleValue
						clearable={false}
						value={item.frequency}
						onChange={(val) => this.props.onFrequencyChange(item, val)} />
				<div className={btnClass} onClick={() => this.props.onStatusUpdate(item)}>{statusLabel}</div>
			</div>		
		);
	}
}

Subscription.PropTypes = {

};

export default Subscription;