import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

//import {WithContext as ReactTags} from 'react-tag-input';

import FileSelector from '../../FileSelector';
import SuccessMessage from '../../SuccessMessage';
import Checkbox from '../../Checkbox';
import BeanItemImage from '../browse/BeanItemImage';

class InventoryEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            options: [
                {value: 'creamy', label: 'creamy'},
                {value: 'nutty', label: 'nutty'},
                {value: 'single origin', label: 'single origin'},
                {value: 'crisp', label: 'crisp'},
                {value: 'citrus', label: 'citrus'}
            ],
            types: [
                {value: "Light Roast", label: "Light Roast"},
                {value: "Dark Roast", label: "Dark Roast"},
                {value: "Single Origin", label: "Single Origin"},
                {value: "Espresso", label: "Espresso"}
            ],
            isActive: true,
            isDecaf: false
        };
    }

    render() {
        const labelClass = 'b dib mb1 w-100';
        const inputClass = 'input-reset ba b--black-20 pa2 mt1 mb2 w-100';
        const combinedClass = 'f6 pa1 w-100 w-50-m w-third-l dib';

        let item = {};
        if (this.props.id) {
            item = this.props.items[this.props.id];
        }

        console.log(this.props.description);
        return (
            <div>
                <SuccessMessage success={this.props.success} message={this.props.id ? 'Successfully edited ' + item.name + '.' : 'Successfully added beans.'}/>
                <form key={this.props.id} onSubmit={this.props.onAddBeans} className="pa2 black-80">
                    <fieldset disabled={this.state.edit || this.props.fetching} className="bw0">
                        <div className="center w-100">
                            <div className={combinedClass}>
                                <label className={labelClass}>Name:</label>
                                <input ref={this.props.name} className={inputClass} type="text" defaultValue={item.name} required/>
                            </div>
                            <div className={combinedClass+' v-top'}>
                                <label className={labelClass}>Coffee Type:</label>
                                <Select
                                    options={this.state.types}
                                    value={this.props.type}
                                    onChange={this.props.onAddType}
                                    />
                            </div>
                            <div className={combinedClass}>
                                <label className={labelClass}>Bags in Stock:</label>
                                <input id="bags" ref={this.props.bags} className={inputClass} type="text" defaultValue={item.inStockBags} required/>
                            </div>
                            {!this.props.id &&
                                <div className="f6 pa1 w-100 w-two-thirds-l dib">
                                    <div className="w-50-l w-100 dib pr2">
                                        <label className={labelClass}>Oz per Bag:</label>
                                        <input ref={this.props.size} className={inputClass} type="text" placeholder="12" required/>
                                    </div>
                                    <div className="w-50-l w-100 dib pr1">
                                        <label className={labelClass}>Price per Bag:</label>
                                        <input ref={this.props.price} className={inputClass} type="text" placeholder="$0.00" required/>
                                    </div>
                                </div>
                            }
                            <div className="w-50-l w-100 dib f6 pa1 pr2 fl">
                                <label className={labelClass}>Tags:</label>
                                <Select.Creatable
                                    multi
                                    options={this.state.options}
                                    value={this.props.tags}
                                    onChange={this.props.onAddTag}
                                    />
                            </div>
                            <div className={combinedClass}>
                                <label className="dib b pr2">Decaf:</label>
                                <Checkbox onChange={this.props.isDecaf} value={item.isDecaf}/>
                                <label className="dib b pr2">Currently Available:</label>
                                <Checkbox onChange={this.props.isActive} value={item.isActive}/>
                            </div>
                            <div className="w-50-l w-100 f6 pa2 fr">
                                <div className="w-50 pa1 center">
                                    <label className={labelClass}>Bean Image:</label>
                                    <div className="ma1 ph5  ba">
                                        <BeanItemImage src={this.props.image || item.pictureURL}/>
                                    </div>
                                </div>
                                <div className="w-50 pa1 center">
                                    <FileSelector
                                        fileSelected={this.props.photo}
                                        buttonText={'Upload Image'}
                                        />
                                </div>
                            </div>
                            <div className="w-50-l w-100 pa2 dib">
                                <label className={labelClass}>Description:</label>
                                <textarea id="decaf" ref={this.props.description} className={inputClass} defaultValue={item.description} required/>
                            </div>
                            <div className="pa3 pa3-ns w-100">
                                <input className="self-center b ph3 pv2 input-reset ba b--white white bg-green grow pointer f6 dib" type="submit" value={this.props.id ? 'Edit Bean': 'Add Bean'}/>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

InventoryEdit.propTypes = {
    id: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    onAddBeans: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    bags: PropTypes.func.isRequired,
    size: PropTypes.func,
    price: PropTypes.func,
    isDecaf: PropTypes.func.isRequired,
    isActive: PropTypes.func.isRequired,
    description: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    photo: PropTypes.func.isRequired,
    image: PropTypes.string,
    onAddTag: PropTypes.func.isRequired,
    onAddType: PropTypes.func.isRequired,
    type: PropTypes.object,
    items: PropTypes.object
};

export default InventoryEdit;
