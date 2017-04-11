import React, { Component, PropTypes } from 'react';

import Subscription from './Subscription';
import ErrorMessage from './../../ErrorMessage';
import Loading from'./../../Loading';

class SubscriptionList extends Component {
	render() {
		return (
			<div className="w-100 pa4-ns">
				{this.props.ids.map((key) =>
					<Subscription item={this.props.items[key]} key={key} onFrequencyChange={this.props.onFrequencyChange} onStatusUpdate={this.props.onStatusUpdate} />
					)}
					<Loading fetching={this.props.fetching} length={this.props.items.length}/>
				</div>
		);
	}
}

//Prop validation
SubscriptionList.propTypes = {
	ids: PropTypes.array.isRequired,
	items: PropTypes.object,
	fetching: PropTypes.bool,
<<<<<<< HEAD
	changeSubscription: PropTypes.func.isRequired
=======
	error: PropTypes.string,
>>>>>>> 504ff8d2070dd3c04e70f120e3de768366d6a240
};

export default SubscriptionList;
