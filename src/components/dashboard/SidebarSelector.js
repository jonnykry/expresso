import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class SidebarSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    hasChildren(active) {
        if (active) {
            return (<div className="b--black">{ this.props.children }</div>);
        }

        return (<div/>);
    }

    render() {
        let linkClass = 'no-underline black';
        let btnClass = 'pointer f6 pa1 center w-100 link dim black pl3 pv3';

        const active = this.props.location.includes(this.props.to);
        const dropdown = this.hasChildren(active);

        if (this.props.subSelector) {
            btnClass += ' pl4';
            linkClass += ' black';
        }

        if (active) {
            btnClass += ' b';
        }

        return (
            <div>
                <Link className={linkClass} to={this.props.to}>
                    <div className={btnClass}>
                        {this.props.name}
                    </div>

                </Link>
                {dropdown}
            </div>
        );
    }

}

SidebarSelector.propTypes = {
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    subSelector: PropTypes.bool,
    children: PropTypes.object
};

export default SidebarSelector;
