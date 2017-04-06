import React, {Component} from 'react';
import {connect} from 'react-redux';

import SidebarSelector from './SidebarSelector';

class RoasterSidebar extends Component {
    render() {
        const b = this.props.location;
        const d = '/dashboard/roaster/';

        // TODO:  This is where we need to do something different for roaster accounts
        const content = <SidebarSelector subSelector name="Roaster Account" to={d + 'account'} location={b}/>;

        console.log(this.props.user.roasterId);
        return (
            <div>
                {this.props.user.roasterId && content}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(RoasterSidebar);
