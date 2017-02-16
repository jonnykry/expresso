import React, { Component } from 'react';
import { connect } from 'react-redux';


class Bloodlines extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: "https://bloodlines.expresso.store/api/"
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
					Bloodlines
				</div>
				{child}
            </div>
        );
    }
}

export default connect()(Bloodlines);
