import React, { Component } from 'react';
import MessageContentContainer from './MessageContentContainer';


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
				<div className="tc f1-l mt2 b">
					Bloodlines
				</div>
                <MessageContentContainer url={this.state.url}/>
            </div>
        );
    }
}

export default Bloodlines;
