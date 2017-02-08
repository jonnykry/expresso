import React, { Component } from 'react';
import { Link } from 'react-router';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';

class SidebarContent extends Component {
    render() {
        const btnClass = 'pointer f4 pa1 bold center mw6';
        const p = this.props;

        const bloodlines = <BloodlinesSidebar />;
        const roasters = null;
        return (
            <div className="flex flex-column justify-between h-100">
                <div className="flex flex-column">
                    <Link to="/" className="link black no-underline pa3 f2 b" title="Home">Expresso</Link>
                    <SidebarSelector name="Browse Roasters" active={p.itemToRender === 0}
                                     head={btnClass}
                                     handle={p.onRoastersClick} children={roasters}></SidebarSelector>
                    <SidebarSelector name="Bloodlines" active={p.itemToRender === 1}
                                     head={btnClass}
                                     handle={p.onBloodlinesClick} children={bloodlines} ></SidebarSelector>
                </div>
                <div className="flex flex-column">
                    <div className={btnClass} onClick={p.onLogout}>Logout</div>
                </div>
            </div>
        );
    }
}

export default SidebarContent;
