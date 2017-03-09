import React, { Component, PropTypes } from 'react';

import Subscription from './Subscription';
import ErrorMessage from './../../ErrorMessage';
import Loading from'./../../Loading';

class SubscriptionList extends Component {
	render() {
		return (
			<div>
				<ErrorMessage error={this.props.error} />
				{this.props.ids.map((key) =>
					<Subscription item={this.props.items[key]} key={key} />
					)}
					<Loading fetching={this.props.fetching} length={this.props.items.length}/>
				</div>
		);
	}	
}

//Create object hold hold props - does prop validation
SubscriptionList.propTypes = {
	ids: PropTypes.array.isRequired,
	items: PropTypes.object,
	fetching: PropTypes.bool,
	error: PropTypes.string,
	changeSubscription: PropTypes.func.isRequired,
	deleteSubscription: PropTypes.func.isRequired
};

export default SubscriptionList; 