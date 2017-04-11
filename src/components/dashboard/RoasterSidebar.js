import React, {Component} from 'react';
import FaArchive from 'react-icons/lib/fa/archive';

import SidebarSelector from './SidebarSelector';

class RoasterSidebar extends Component {
    render() {
        const b = this.props.location;
        const d = '/dashboard/roaster/';

        return (
            <div>
                <SidebarSelector subSelector name="Inventory" to={d + 'inventory'} location={b} icon={<FaArchive className="mr2 pb1"/>}/>
                <SidebarSelector subSelector name="Roaster Account" to={d + 'account'} location={b}/>
            </div>
        );
    }
}

export default RoasterSidebar;
