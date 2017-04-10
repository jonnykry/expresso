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
		const btnClass = 'pointer dim br1 ba bw1 tc pa2 black';
		const statusLabel = item.status === 'ACTIVE' ? 'Deactivate' : 'Activate';

		const date = new Date(item.createdAt);

		return (
			<div className="mw7 flex center bl br bt bb mb2 pa3 flex flex-column">
				<div className="flex">
					<Link className="pa1 mr2 black no-underline ba bw1" to={'/dashboard/browse/' + item.itemId}>View Item Details</Link>
					<div className={btnClass + ' w4 pr3 mr3'} onClick={() => this.props.onStatusUpdate(item)}>{statusLabel}</div>
					<div className="w-25 pt2"><strong># Bags:</strong> {item.quantity}</div>
					<div className="b pv2 pr2">Frequency:</div>
					<Select className="w-50 mr3 h-100"
							options={frequencyOptions}
							simpleValue
							clearable={false}
							value={item.frequency}
							onChange={(val) => this.props.onFrequencyChange(item, val)} />
				</div>
				<div className="w-100 pt3"><strong>Started:</strong> {date.toLocaleDateString()}</div>
			</div>		
		);
	}
}

export default Subscription;