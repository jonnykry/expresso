import React, {Component, PropTypes} from 'react';

import SuccessMessage from '../../SuccessMessage';

class InventoryInput extends Component {
    render() {
        const labelClass = 'b dib mb2 w-100';
        const inputClass = 'input-reset ba b--black-20 pa1 mb2 w-100';
        const combinedClass = 'f6 w-100 w-50-m w-third-l pr1 dib';

        return (
            <div>
                <SuccessMessage success={this.props.success} message={'Successfully added beans.'}/>
                <form onSubmit={this.props.onAddBeans} className="pa2 black-80">
                    <fieldset disabled={this.props.fetching}>
                        <div className="center w-100">
                            <div className={combinedClass}>
                                <label className={labelClass}>Name:</label>
                                <input id="name" ref={this.props.name} className={inputClass} type="text" required/>
                            </div>
                            <div className={combinedClass}>
                                <label className={labelClass}>Coffee Type:</label>
                                <input id="type" ref={this.props.type} className={inputClass} type="text" required/>
                            </div>
                            <div className={combinedClass}>
                                <label className={labelClass}>Bags in Stock:</label>
                                <input id="bags" ref={this.props.bags} className={inputClass} type="text" required/>
                            </div>
                            <div className={combinedClass}>
                                <label className={labelClass}>Oz per Bag:</label>
                                <input id="weight" ref={this.props.size} className={inputClass} type="text" required/>
                            </div>
                            <div className={combinedClass}>
                                <label className={labelClass}>Price per Bag:</label>
                                <input id="price" ref={this.props.price} className={inputClass} type="text" placeholder="$0.00" required/>
                            </div>
                            <div className={combinedClass}>
                                <label className="dib b pr2">Decaf:</label>
                                <input id="decaf" ref={this.props.isDecaf} className="mr3" type="checkbox" value="isDecaf"/>
                                <label className="dib b pr2">Currently Available:</label>
                                <input id="available" ref={this.props.isActive} className="mr3" type="checkbox" value="isDecaf"/>
                            </div>
                            <div className="w-100 dib">
                                <label className={labelClass}>Description:</label>
                                <textarea id="decaf" ref={this.props.description} className={inputClass} required/>
                            </div>
                            <div className="pa3 pa3-ns w-100">
                                <input className="self-center b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib" type="submit" value="Add Roast"/>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

InventoryInput.propTypes = {
    fetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    onAddBeans: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    type: PropTypes.func.isRequired,
    bags: PropTypes.func.isRequired,
    size: PropTypes.func.isRequired,
    price: PropTypes.func.isRequired,
    isDecaf: PropTypes.func.isRequired,
    isActive: PropTypes.func.isRequired,
    description: PropTypes.func.isRequired
};

export default InventoryInput;
