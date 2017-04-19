import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getRoaster} from '../../../actions/roasterActions';

class Roaster extends Component {
    loadRoaster() {
        if (this.roaster()) {
            return;
        }

        this.props.dispatch(getRoaster(this.props.user.roasterId));
    }

    roaster() {
        if (!this.props.roasters[this.props.user.roasterId]) {
            return null;
        }

        return this.props.roasters[this.props.user.roasterId];
    }

    render() {
        let child = null;
        if (this.props.children) {
            child = React.cloneElement(this.props.children, {roaster: this.roaster()});
        }
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4">
                {
                    this.roaster() &&
                    <div>
                        <div className="tc f1-l mt2 b">
                            {this.roaster().name}
                        </div>
                        {child}
                    </div>
                }
            </div>
        );
    }
}

Roaster.propTypes = {
    children: PropTypes.object.isRequired,
    roasters: PropTypes.object,
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        roasters: state.roaster.roasters
    };
}

export default connect(mapStateToProps)(Roaster);
