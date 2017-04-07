import React, {Component} from 'react';

import '../assets/css/exampleWrapper.css';

class Table extends Component {
    render() {
        return (
            <div>
                <h3>{ this.props.exampleName }</h3>
                <p>{ this.props.exampleDescription }</p>
                {this.props.content}
            </div>
        );
    }
}

export default Table;
