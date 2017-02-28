import React, {Component, PropTypes} from 'react';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';
import RoasterSidebar from './RoasterSidebar';

class SidebarContent extends Component {
    render() {
        const bloodlines = <BloodlinesSidebar location={this.props.location}/>;
        const roaster = <RoasterSidebar location={this.props.location}/>;

        const b = this.props.location;
        const d = '/dashboard/';
        return (
            <div className="relative h-100 overflow-hidden">
                <div>
                    <SidebarSelector name="Browse Beans" to={d + 'browse'} location={b}/>
                    <SidebarSelector name="Bloodlines" to={d + 'bloodlines'} location={b}>
                        {bloodlines}
                    </SidebarSelector>
                    <SidebarSelector name="Roaster" to={d + 'roaster'} location={b}>
                        {roaster}
                    </SidebarSelector>
                    <SidebarSelector name="Account Settings" to={d + 'settings'} location={b}/>
                    <SidebarSelector name="Logout" location={b} to={'/logout'}/>
                </div>
            </div>
        );
    }
}

SidebarContent.propTypes = {
    location: PropTypes.string.isRequired
};

export default SidebarContent;
