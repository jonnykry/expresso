import React, {Component, PropTypes} from 'react';
import {WithContext as ReactTags} from 'react-tag-input';

import FileSelector from '../../FileSelector';
import SuccessMessage from '../../SuccessMessage';
import BeanItemImage from '../browse/BeanItemImage';

class InventoryEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: []
        };
    }

    render() {
        const labelClass = 'b dib mb2 w-100';
        const inputClass = 'input-reset ba b--black-20 pa1 mb2 w-100';
        const combinedClass = 'f6 pa1 w-100 w-50-m w-third-l dib';

        const item = this.props.items[this.props.id];
        let tags = [];
        for (let i = 0; i < item.tags.length; i++) {
            tags.push({text: item.tags[i]});
        }
        return (
            <div>
                <SuccessMessage success={this.props.success} message={'Successfully edited ' + item.name + '.'}/>
                <form onSubmit={this.props.onEditBeans} className="pa2 black-80">
                    <fieldset disabled={this.state.edit || this.props.fetching} className="bw0">
                        <div className="center w-100">
                            <div className={combinedClass}>
                                <label className={labelClass}>Name:</label>
                                <input id="name" ref={this.props.name} className={inputClass} type="text" value={item.name} required/>
                            </div>
                            <div className={combinedClass}>
                                <label className={labelClass}>Coffee Type:</label>
                                <input id="type" ref={this.props.type} className={inputClass} type="text" value={item.coffeeType} required/>
                            </div>
                            <div className={combinedClass}>
                                <label className={labelClass}>Bags in Stock:</label>
                                <input id="bags" ref={this.props.bags} className={inputClass} type="text" value={item.inStockBags} required/>
                            </div>
                            <div className={combinedClass}>
                                <label className="dib b pr2">Decaf:</label>
                                <input id="decaf" ref={this.props.isDecaf} className="mr3" type="checkbox" checked={item.isDecaf}/>
                                <label className="dib b pr2">Currently Available:</label>
                                <input id="available" ref={this.props.isActive} className="mr3" type="checkbox" checked={item.isActive}/>
                            </div>
                            <div className="w-50-l w-100 dib f6 pa1 fl">
                                <label className={labelClass}>Tags:</label>
                                <ReactTags
                                    tags={tags}
                                    /* eslint-disable react/jsx-handler-names */
                                    handleDelete={this.props.onDeleteTag}
                                    handleAddition={this.props.onAddTag}
                                    /* eslint-enable react/jsx-handler-names */
                                    delimiters={[32, 44, 13, 9]}
                                    classNames={{
                                        tags: 'tagsClass',
                                        tagInput: 'w-100 ma1',
                                        tagInputField: 'w-100 pa1',
                                        selected: 'selectedClass',
                                        tag: 'ml1 pa1 mv2 f6 b--black-20 ba',
                                        remove: 'b pa1',
                                        suggestions: 'suggestionsClass'
                                    }}
                                    />
                            </div>
                            <div className="w-50-l w-100 dt f6 pa2 fr">
                                <div className="w-50 dtc v-mid pa1">
                                    <label className={labelClass}>Bean Image:</label>
                                    <div className="ma1 ph5  ba">
                                        <BeanItemImage src={this.props.image || item.pictureURL}/>
                                    </div>
                                </div>
                                <div className="w-50 dtc v-mid pa1">
                                    <FileSelector
                                        fileSelected={this.props.photo}
                                        buttonText={'Upload Image'}
                                        />
                                </div>
                            </div>
                            <div className="w-50-l w-100 pa2 dib">
                                <label className={labelClass}>Description:</label>
                                <textarea id="decaf" ref={this.props.description} className={inputClass} value={item.description} required/>
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

InventoryEdit.propTypes = {
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
    description: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    photo: PropTypes.func.isRequired,
    image: PropTypes.string,
    onDeleteTag: PropTypes.func.isRequired,
    onAddTag: PropTypes.func.isRequired
};

export default InventoryEdit;
