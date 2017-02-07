import React, { Component } from 'react';

class SidebarSelector extends Component {
	constructor(props) {
		super(props);
	}

	hasChildren() {
		const style = 'list pl0 ml0 center mb0 mt0 bt b--light-silver';
		if (this.props.children && this.props.active) {
			return (
                <div className={style}>
                	{ this.props.children }
                </div>
			);
		} else {
			return (<div></div>);
		}
	}

	render() {
		const clusterClass = 'ba b--black-20';
		let btnClass = this.props.head;
		const dropdown = this.hasChildren();


		if (this.props.active) {
			btnClass += ' white bg-black';
		} else {
			btnClass += ' hover-bg-black-10';
		}

		return (
            <div className={clusterClass} onClick={this.props.handle}>
                <div className={btnClass}>{this.props.name}</div>
                {dropdown}
            </div>
		);
	}

}

export default SidebarSelector;