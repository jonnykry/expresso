import React, {Component} from 'react';

import SidebarSelector from './SidebarSelector';

class RoasterSidebar extends Component {
    render() {
        const b = this.props.location;
        const d = '/dashboard/roaster/';

        // TODO:  This is where we need to do something different for roaster accounts
        const content = <SidebarSelector subSelector name="Roaster Account" to={d + 'account'} location={b}/>;

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default RoasterSidebar;
