import React, { Component } from 'react';
import { connect } from 'react-redux';


class Warehouse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: "https://warehouse.expresso.store/api/"
		};
	}

    render() {
		let child = null;
		if (this.props.children) {
			child = React.cloneElement(this.props.children, {
				url: this.state.url
			});
		}
        return (
        	<div>
				<div className="tc f1-l mt2 b">
					Warehouse
				</div>
				{child}
            </div>
        );
    }
}

export default connect()(Warehouse);