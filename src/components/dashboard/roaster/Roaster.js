import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Roaster extends Component {
    render() {
        let child = null;
        if (this.props.children) {
            child = React.cloneElement(this.props.children);
        }
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4">
                <div className="tc f1-l mt2 b">
                    {this.props.roaster.name}
                </div>
                {child}
            </div>
        );
    }
}

Roaster.propTypes = {
    children: PropTypes.object.isRequired,
    roaster: PropTypes.object
};

function mapStateToProps(state) {
    return {
        roaster: state.roaster.roaster
    };
}

export default connect(mapStateToProps)(Roaster);
