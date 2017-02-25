import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';

import { connect } from 'react-redux';

class RoasterSidebar extends Component {
    render() {
        const b = this.props.location;
        const d = "/dashboard/roaster/";

        const content = this.props.user.roasterId === '' ?
            <SidebarSelector subSelector={true} name="Register a Roaster Account" to={d + "register"} location={b} />
            : <SidebarSelector subSelector={true} name="Roaster Account" to={d + "account"} location={b} />;

        return (
            <div>
                {content}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(RoasterSidebar);