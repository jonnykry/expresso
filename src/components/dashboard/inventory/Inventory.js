import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
// import {update} from 'react-addons-update';
// import {Editors, Formatters} from 'react-data-grid-addons';

import InventoryEdit from './InventoryEdit';
import BooleanFormatter from './BooleanFormatter';
import ArrayFormatter from './ArrayFormatter';
import LinkFormatter from './LinkFormatter';

class Inventory extends Component {
    constructor(props) {
        super(props);

        this._columns = [{
            key: 'id',
            name: 'Page',
            formatter: LinkFormatter,
            width: 110
        },
        {
            key: 'name',
            name: 'Name'
        },
        {
            key: 'coffeeType',
            name: 'Coffee Type',
            width: 120
        },
        {
            key: 'inStockBags',
            name: 'Stock',
            width: 75
        },
        {
            key: 'consumerPrice',
            name: 'Unit Price',
            width: 90
        },
        {
            key: 'ozInBag',
            name: 'oz',
            width: 50
        },
        {
            key: 'isDecaf',
            name: 'Decaf',
            width: 55,
            formatter: BooleanFormatter
        },
        {
            key: 'isActive',
            name: 'Avail',
            width: 50,
            formatter: BooleanFormatter
        },
        {
            key: 'tags',
            name: 'Tags',
            formatter: ArrayFormatter
        },
        {
            key: 'description',
            name: 'Description'
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
            id: item.id,
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

        console.log(this.props.selected);
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
                            <InventoryEdit
                                success={this.props.modify.success}
                                fetching={this.props.modify.fetching}
                                image={this.props.image}
                                tags={this.props.tags}
                                type={this.props.type}
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
                        item={this.props.items[this.props.selected]}
                        image={this.props.eimage}
                        tags={this.props.etags}
                        type={this.props.etype}
                        {...this.props.edit}
                        />}
            </div>
        );
    }
}

Inventory.propTypes = {
    ids: PropTypes.array.isRequired,
    input: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired,
    edit: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
    modify: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired,
    image: PropTypes.string,
    eimage: PropTypes.string,
    tags: PropTypes.array.isRequired,
    etags: PropTypes.array.isRequired,
    type: PropTypes.object.isRequired,
    etype: PropTypes.object.isRequired
};

export default Inventory;
