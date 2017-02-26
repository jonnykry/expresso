import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllReceipts } from '../../../actions/bloodlinesActions';
import ReceiptList from './ReceiptList';
import ErrorMessage from '../../ErrorMessage';
import SuccessMessage from '../../SuccessMessage';

class ReceiptContainer extends Component {
	componentDidMount() {
		this.update();
	}

	update(reset) {
		const { dispatch } = this.props;
		let offset = this.props.items.cursor;
		if (reset) {
			offset = 0;
		}

		dispatch(getAllReceipts(offset, 20)).then(this.nextPage.bind(this));
	}

	nextPage() {
		if (this.props.items.next && !this.props.items.fetching) {
			this.update();
		}
	}

	render() {

		return (
			<div>
				<ErrorMessage error={this.props.modify.error} />
				<SuccessMessage success={this.props.modify.success} message={"Success"} />
				<ReceiptList {...this.props.items}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		items: state.receipts,
		modify: state.modify,
	};
}

export default connect(mapStateToProps)(ReceiptContainer);