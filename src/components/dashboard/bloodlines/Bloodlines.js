import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Bloodlines extends Component {
    render() {
        let child = null;
        if (this.props.children) {
            child = React.cloneElement(this.props.children);
        }
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4">
                <div className="tc f1-l mt2 b">
                    Bloodlines
                </div>
                {child}
            </div>
        );
    }
}

Bloodlines.propTypes = {
    children: PropTypes.object.isRequired
};

export default connect()(Bloodlines);
