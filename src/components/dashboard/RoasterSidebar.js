import React, {Component} from 'react';
import FaArchive from 'react-icons/lib/fa/archive';

import SidebarSelector from './SidebarSelector';

class RoasterSidebar extends Component {
    render() {
        const b = this.props.location;
        const d = '/dashboard/roaster/';

        // TODO:  This is where we need to do something different for roaster accounts
        return (
            <div>
                <SidebarSelector subSelector name="Roaster Account" to={d + 'account'} location={b}/>
                <SidebarSelector subSelector name="Inventory" to={d + 'inventory'} location={b} icon={<FaArchive className="mr2 pb1"/>}/>
            </div>
        );
    }
}

export default RoasterSidebar;
