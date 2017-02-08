import React, { Component } from 'react';
import { Link } from 'react-router';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';

class SidebarContent extends Component {
    render() {
        const btnClass = 'pointer f4 pa1 bold center mw6';
        const { onBloodlinesClick, onRoastersClick, itemToRender, onAccountSettingsClick } = this.props;
        const bloodlines = <BloodlinesSidebar />;

        // TODO:  Set Logout into the logout path
        return (
            <div className="flex flex-column justify-between h-100">
                <div className="flex flex-column">
                    <Link to="/" className="link black no-underline pa3 f2 b" title="Home">Expresso</Link>
                    <SidebarSelector name="Browse Roasters" active={itemToRender === 0}
                                     head={btnClass}
                                     handle={onRoastersClick} children={null} />
                    <SidebarSelector name="Bloodlines" active={itemToRender === 1}
                                     head={btnClass}
                                     handle={onBloodlinesClick} children={bloodlines} />
                    <SidebarSelector name="Account Settings" active={itemToRender === 2}
                                     head={btnClass}
                                     handle={onAccountSettingsClick} children={null} />
                </div>
                <div className="flex flex-column">
                    <Link to="/" className={btnClass}>Logout</Link>
                </div>
            </div>
        );
    }
}

export default SidebarContent;
