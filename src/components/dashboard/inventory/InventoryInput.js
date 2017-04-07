import React, {Component} from 'react';

class InventoryInput extends Component {
    render() {
        const labelClass = 'f5 b dib mb2 w-20';
        const inputClass = 'input-reset ba b--black-20 pa2 mb2 dib w-80';

        return (
            <div>
                <form onSubmit={this.props.handleAddBeans} className="pa1 black-80">
                    <div className="measure center">
                        <label className={labelClass}>Name</label>
                        <input id="subject" ref={this.name} className={inputClass} type="text"/>
                        <label className={labelClass}>Coffee Type</label>
                        <input id="subject" ref={this.type} className={inputClass} type="text"/>
                        <label className={labelClass}>Bags in Stock</label>
                        <input id="subject" ref={this.bags} className={inputClass} type="text"/>
                        <label className={labelClass}>Price per Bag</label>
                        <input id="subject" ref={this.price} className={inputClass} type="text" placeholder="$0.00"/>
                        <div className="pa3 pa3-ns">
                            <input className="self-center b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib" type="submit" value="Add Roast"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default InventoryInput;
