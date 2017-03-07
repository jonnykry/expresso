import React, { Component, PropTypes } from 'react';

import Subscription from './Subscription';
import ErrorMessage from './../../ErrorMessage';
import Loading from'./../../Loading';

class SubscriptionList extends Component {
	render() {
		return (
			<div>
				<ErrorMessage error={this.props.error} />
				{this.props.items && this.props.items.map(key =>
					<Subscription 
						key={key}
						item={this.props.items[key]}
						updateSubscription={this.props.updateSubscription}
						deleteSubscription={this.props.deleteSubscription}
					 	/>
					)}
					<Loading feching={this.props.fetching} length={this.props.items.length}/>
				</div>
		);	 
	}	
}

//Create object hold hold props - does prop validation

SubscriptionList.propTypes = {
	ids: PropTypes.array,
	items: PropTypes.object,
	fetching: PropTypes.bool,
	error: PropTypes.string,
	updateSubscription: PropTypes.func.isRequired,
	deleteSubscription: PropTypes.func.isRequired
};

export default SubscriptionList; 