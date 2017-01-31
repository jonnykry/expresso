import React, { Component } from 'react';
import MessageContentContainer from '../../../containers/MessageContentContainer';


class Bloodlines extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: "https://bloodlines.expresso.store/api/"
		};
	}

    render() {
        return (
        	<div>
                <MessageContentContainer url={this.state.url}/>
            </div>
        );
    }
}

export default Bloodlines;
