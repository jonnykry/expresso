import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';
import RoasterSidebar from './RoasterSidebar';
import TiUserOutline from 'react-icons/lib/ti/user-outline';

class SidebarContent extends Component {
    render() {
        const bloodlines = <BloodlinesSidebar location={this.props.location}/>;
        const roaster = <RoasterSidebar location={this.props.location}/>;

        const b = this.props.location;
        const d = '/dashboard/';
        return (
            <div className="relative h-100 overflow-hidden flex justify-between flex-column">
                <div>
                    <SidebarSelector name="Browse Beans" to={d + 'browse'} location={b}/>
                    <SidebarSelector name="Bloodlines" to={d + 'bloodlines'} location={b}>
                        {bloodlines}
                    </SidebarSelector>
                    <SidebarSelector name="Roaster" to={d + 'roaster'} location={b}>
                        {roaster}
                    </SidebarSelector>
                </div>
                <div className="flex h3 justify-between pa3 bt">
                     <Link to={'/'} className="no-underline ph2"><div className="black b dim">Home</div></Link>
                     <Link to={d + 'settings'} className="no-underline ph2"><div className="black b dim">Account <TiUserOutline className="black f4" /></div></Link>
                     <Link to={'/logout'} className="no-underline ph2"><div className="black b dim">Logout</div></Link>               
                </div>
            </div>
        );
    }
}

SidebarContent.propTypes = {
    location: PropTypes.string.isRequired
};

export default SidebarContent;
