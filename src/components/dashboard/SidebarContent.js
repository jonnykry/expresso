import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';
import RoasterSidebar from './RoasterSidebar';
import TiUserOutline from 'react-icons/lib/ti/user-outline';
import FaSearch from 'react-icons/lib/fa/search';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaRssSquare from 'react-icons/lib/fa/rss-square';
import FaShoppingBag from 'react-icons/lib/fa/shopping-bag';
import FaHome from 'react-icons/lib/fa/home';
import FaSignOut from 'react-icons/lib/fa/sign-out';

class SidebarContent extends Component {
    render() {
        const bottomTextClass = "b dim white";
        const bottomLinkClass = "no-underline";

        const bloodlines = <BloodlinesSidebar location={this.props.location}/>;
        const roaster = <RoasterSidebar location={this.props.location}/>;

        const isDev = process.env.NODE_ENV !== 'production';

        const b = this.props.location;
        const d = '/dashboard/';
        return (
            <div className="relative h-100 overflow-hidden flex justify-between flex-column bg-blue white">
                <div>
                    <SidebarSelector name="Browse Beans" to={d + 'browse'} location={b} icon={<FaSearch className="mr2 pb1" />}/>
                    {isDev ? 
                            <SidebarSelector name="Bloodlines" to={d + 'bloodlines'} location={b} icon={<FaEnvelopeO className="mr2 pb1" />}>
                                {bloodlines}
                            </SidebarSelector> 
                            : ''}
                    <SidebarSelector name="Subscriptions" to={d + 'subscriptions'} location={b} icon={<FaRssSquare className="mr2 pb1" />}/>

                    {this.props.roaster && <SidebarSelector name="Roaster" to={d + 'roaster'} location={b} icon={<FaShoppingBag className="mr2 pb1" />}>
                        {roaster}
                    </SidebarSelector>}
                </div>
                <div className="flex h4 justify-between ph3 pv4 bt">
                     <Link to={'/'} className={bottomLinkClass + ' ph2'} style={{'padding-top': '1.25rem'}}><div className={bottomTextClass}><FaHome className="pl2 pb1 white f3" /> Home</div></Link>
                     <Link to={d + 'settings'} className={bottomLinkClass + ' ph3'}><div className={bottomTextClass}>
                         {this.props.profileImage &&
                            <div className="ph2 pb1"><img src={this.props.profileImage} className="br4 ba bw2 w2 h2 dib" alt="Account" /></div>
                         }
                         {!this.props.profileImage &&
                            <TiUserOutline className="pl3 pb1 white f3" />
                         }
                          Account
                     </div></Link>
                     <Link to={'/logout'} className={bottomLinkClass + ' ph2'} style={{'padding-top': '1.25rem'}}><div className={bottomTextClass}><FaSignOut className="pl3 pb1 white f3" /> Logout</div></Link>
                </div>
            </div>
        );
    }
}

SidebarContent.propTypes = {
    location: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
    roaster: PropTypes.bool
};

export default SidebarContent;
