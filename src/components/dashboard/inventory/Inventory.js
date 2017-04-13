import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
// import {update} from 'react-addons-update';
// import {Editors, Formatters} from 'react-data-grid-addons';

import InventoryInput from './InventoryInput';
import InventoryEdit from './InventoryEdit';
import BooleanFormatter from './BooleanFormatter';
import ArrayFormatter from './ArrayFormatter';

class Inventory extends Component {
    constructor(props) {
        super(props);

        this._columns = [{
            key: 'name',
            name: 'Name',
            editable: true
        },
        {
            key: 'coffeeType',
            name: 'Coffee Type',
            editable: true
        },
        {
            key: 'inStockBags',
            name: 'Stock',
            editable: true,
            width: 75
        },
        {
            key: 'consumerPrice',
            name: 'Unit Price',
            editable: true,
            width: 90
        },
        {
            key: 'ozInBag',
            name: 'oz',
            editable: true,
            width: 50
        },
        {
            key: 'isDecaf',
            name: 'Decaf',
            editable: true,
            width: 55,
            formatter: BooleanFormatter
        },
        {
            key: 'isActive',
            name: 'Avail',
            editable: true,
            width: 50,
            formatter: BooleanFormatter
        },
        {
            key: 'tags',
            name: 'Tags',
            editable: true,
            formatter: ArrayFormatter
        },
        {
            key: 'description',
            name: 'Description',
            editable: true
        },
        {
            key: 'createdAt',
            name: 'Created',
            width: 90
        },
        {
            key: 'updatedAt',
            name: 'Modified',
            width: 90
        }];

        this.state = {
            showAdd: false
        };

        this.handleAddToggleBind = this.handleAddToggle.bind(this);
        this.rowGetterBind = this.rowGetter.bind(this);
    }

    rowGetter(i) {
        const key = this.props.ids[i];
        const item = this.props.items[key];
        const row = {
            name: item.name,
            coffeeType: item.coffeeType,
            inStockBags: item.inStockBags,
            consumerPrice: '$' + item.consumerPrice,
            ozInBag: item.ozInBag,
            isDecaf: item.isDecaf,
            isActive: item.isActive,
            tags: item.tags,
            description: item.description,
            createdAt: new Date(item.createdAt).toLocaleDateString(),
            updatedAt: new Date(item.updatedAt).toLocaleDateString()
        };
        return row;
    }

    handleAddToggle(e) {
        e.preventDefault();

        const s = !this.state.showAdd;
        this.setState({showAdd: s});
    }

    render() {
        const toggleClass = 'pv2 f5 b pl2 pointer tracked';

        return (
            <div>
                {
                    !this.state.showAdd &&
                        (<div className={toggleClass} onClick={this.handleAddToggleBind}>[+] Add Beans</div>)
                }
                {
                    this.state.showAdd &&
                    (
                        <div>
                            <div className={toggleClass} onClick={this.handleAddToggleBind}>[-] Add Beans</div>
                            <InventoryInput
                                success={this.props.modify.success}
                                fetching={this.props.modify.fetching}
                                image={this.props.image}
                                {...this.props.input}
                                />
                        </div>
                    )
                }
                <ReactDataGrid
                    columns={this._columns}
                    rowGetter={this.rowGetterBind}
                    rowsCount={this.props.ids.length}
                    minHeight={400}
                    onRowClick={this.props.onRowClick}
                    />
                {this.props.selected &&
                    <InventoryEdit
                        success={this.props.modify.success}
                        fetching={this.props.modify.fetching}
                        id={this.props.selected}
                        items={this.props.items}
                        image={this.props.eimage}
                        {...this.props.selected}
                        />}
            </div>
        );
    }
}

Inventory.propTypes = {
    ids: PropTypes.array.isRequired,
    input: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired,
    selected: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired,
    image: PropTypes.string,
    eimage: PropTypes.string
};

export default Inventory;
