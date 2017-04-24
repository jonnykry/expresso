import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class LinkFormatter extends Component {
    render() {
        const value = this.props.value;
        return (
            <Link to={'/dashboard/browse/' + value} className="no-underline white bg-green br2 ph2 dim pv1">
                View Page
            </Link>

        );
    }
}

LinkFormatter.propTypes = {
    value: PropTypes.bool
};

export default LinkFormatter;
