import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import './SidebarSelector.css';

class SidebarSelector extends Component {
    constructor(props) {
        super(props);

        this.state ={active: false};
    }

    hasChildren(active) {
        if (active) {
            return (<div className="ba bw1 b--black">{ this.props.children }</div>);
        } else {
            return (<div></div>);
        }
    }

    render() {
        let linkClass = 'no-underline bold';
        let btnClass = 'ba b--black-20 pointer f6 pa1 center w-100 tc';

        const active = this.props.location.includes(this.props.to);
        const dropdown = this.hasChildren(active);

        if (active) {
            btnClass += ' bg-black';
            linkClass += ' white';
        } else {
            btnClass += ' hover-bg-black-10';
            linkClass += ' black';
        }

        return (
            <div>
                <Link to={this.props.to}>
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

};

export default SidebarSelector;
