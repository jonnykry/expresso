import React, { Component } from 'react';
import Navigation from './Navigation';
import MessageContentContainer from '../containers/MessageContentContainer';


class Bloodlines extends Component {
    render() {
        return (
        	<div>
        		<Navigation />
	            <div className="bloodlines">
	                Bloodlines Dashboard
                    <MessageContentContainer />
	            </div>
            </div>
        );
    }
}

export default Bloodlines;
