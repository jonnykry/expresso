import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
import {update} from 'react-addons-update';
import {Editors, Formatters} from 'react-data-grid-addons';

import InventoryInput from './InventoryInput';
import BooleanFormatter from './BooleanFormatter';

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
            name: 'Bags in stock',
            editable: true
        },
        {
            key: 'consumerPrice',
            name: 'Price per Bag',
            editable: true
        },
        {
            key: 'ozInBag',
            name: 'oz/Bag',
            editable: true
        },
        {
            key: 'isDecaf',
            name: 'Decaf',
            editable: true,
            formatter: BooleanFormatter
        },
        {
            key: 'isActive',
            name: 'Available',
            editable: true,
            formatter: BooleanFormatter
        },
        {
            key: 'tags',
            name: 'Tags',
            editable: true
        },
        {
            key: 'description',
            name: 'Description',
            editable: true
        },
        {
            key: 'dateCreated',
            name: 'Created'
        },
        {
            key: 'dateModified',
            name: 'Modified'
        }];

        this.state = {
            showAdd: false
        };

        this.handleAddToggleBind = this.handleAddToggle.bind(this);
        this.rowGetterBind = this.rowGetter.bind(this);
    }

    rowGetter(i) {
        const key = this.props.ids[i];
        return this.props.items[key];
    }

    handleAddToggle(e) {
        e.preventDefault();

        const s = !this.state.showAdd;
        this.setState({showAdd: s});
    }

    handleGridRowsUpdated({fromRow, toRow, updated}) {
        let rows = this.state.rows.slice();

        for (let i = fromRow; i <= toRow; i++) {
            let rowToUpdate = rows[i];
            let updatedRow = update(rowToUpdate, {$merge: updated});
            rows[i] = updatedRow;
        }
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
                                tags={this.props.tags}
                                onAddBeans={this.props.onAddBeans}
                                onAddTag={this.props.onAddTag}
                                onDeleteTag={this.props.onDeleteTag}
                                onDragTag={this.props.onDragTag}
                                success={this.props.modify.success}
                                fetching={this.props.modify.fetching}
                                {...this.props.input}
                                />
                        </div>
                    )
                }
                <ReactDataGrid
                    enableCellSelect
                    //enableRowSelect
                    columns={this._columns}
                    rowGetter={this.rowGetterBind}
                    rowsCount={this.props.ids.length}
                    minHeight={500}
                    onGridRowsUpdated={this.props.onUpdateBeans}
                    />
            </div>
        );
    }
}

Inventory.propTypes = {
    ids: PropTypes.array.isRequired,
    input: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
    modify: PropTypes.object.isRequired,
    onDeleteTag: PropTypes.func.isRequired,
    onAddTag: PropTypes.func.isRequired,
    onDragTag: PropTypes.func.isRequired
};

export default Inventory;
