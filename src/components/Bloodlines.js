import React, { Component } from 'react';
import Navigation from './Navigation';
import MessageContentContainer from '../containers/MessageContentContainer';


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
        		<Navigation />
                <MessageContentContainer url={this.state.url}/>
            </div>
        );
    }
}

export default Bloodlines;
