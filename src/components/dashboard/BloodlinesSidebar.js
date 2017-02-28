import React, {Component, PropTypes} from 'react';
import SidebarSelector from './SidebarSelector';

class BloodlinesSidebar extends Component {
    render() {
        const b = this.props.location;
        const d = '/dashboard/bloodlines/';
        return (
            <div>
                <SidebarSelector name="Content" to={d + 'content'} location={b}/>
                <SidebarSelector name="Triggers" to={d + 'trigger'} location={b}/>
                <SidebarSelector name="Receipts" to={d + 'receipt'} location={b}/>
                <SidebarSelector name="Preferences" to={d + 'preference'} location={b}/>
            </div>
        );
    }
}

BloodlinesSidebar.propTypes = {
    location: PropTypes.string.isRequired
};

export default BloodlinesSidebar;
