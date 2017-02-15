import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllTriggers, createTrigger, deleteTrigger } from '../../../actions/bloodlinesActions'

class TriggerContainer extends Component {
	componentDidMount() {
		this.update();
	}

	update(reset) {

	}

	nextPage() {

	}

	refresh() {

	}

	delete(key) {

	}

	create(data) {

	}

	render() {

		return (
			<div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		getAll: {

		},
		create: {

		},
		delete: {

		}

	};
}

export default connect(mapStateToProps)(TriggerContainer);