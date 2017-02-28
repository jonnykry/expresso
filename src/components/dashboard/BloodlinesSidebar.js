import React, {Component, PropTypes} from 'react';
import SidebarSelector from './SidebarSelector';

class BloodlinesSidebar extends Component {
    render() {
        const b = this.props.location;
        const d = '/dashboard/bloodlines/';
        return (
            <div>
                <SidebarSelector subSelector name={'Content'} to={d + 'content'} location={b}/>
                <SidebarSelector subSelector name={'Triggers'} to={d + 'trigger'} location={b}/>
                <SidebarSelector subSelector name={'Receipts'} to={d + 'receipt'} location={b}/>
                <SidebarSelector subSelector name={'Preferences'} to={d + 'preference'} location={b}/>
            </div>
        );
    }
}

BloodlinesSidebar.propTypes = {
    location: PropTypes.string.isRequired
};

export default BloodlinesSidebar;
