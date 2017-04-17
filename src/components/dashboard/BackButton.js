import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

class BackButton extends Component {
    render() {
        return (
            <div className="dn db-l">
                <div className={'pointer pa1 bb br bw1 black bg-white absolute'} onClick={browserHistory.goBack}>
                    <FaArrowLeft className="pv1 ph2 f1" />
                </div>
            </div>
        );
    }
}

export default BackButton;
