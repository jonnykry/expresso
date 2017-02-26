import React, { Component } from 'react';

class Loading extends Component {

	render() {
		return (
			<div>
				{(!this.props.fetching && this.props.length === 0) && (
					<p>No Content</p>
				)}
				{(this.props.fetching) && (
					<p>Loading...</p>
				)}
			</div>
		)
	}
}

export default Loading;