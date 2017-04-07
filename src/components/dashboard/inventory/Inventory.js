import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
import {update} from 'react-addons-update';
import {Editors, Formatters} from 'react-data-grid-addons';

import InventoryInput from './InventoryInput';

const {AutoComplete: AutoCompleteEditor, DropDownEditor} = Editors;
const {DropDownFormatter} = Formatters;

// options for priorities autocomplete editor
const priorities = [{id: 0, title: 'Regular'}, {id: 1, title: 'Decaf'}];
const PrioritiesEditor = <AutoCompleteEditor options={priorities}/>;
const active = [{id: 0, title: 'True'}, {id: 1, title: 'False'}];
const ActiveEditor = <AutoCompleteEditor options={active}/>;

class Inventory extends Component {
    constructor(props) {
        super(props);

        this._columns = [{
            key: 'name',
            name: 'Name',
            editable: true
        },
        {
            key: 'coffeeType', //name
            name: 'Coffee Type', //Name
            editable: true
        },
        {
            key: 'inStockBags', //name
            name: 'Bags in stock', //Name
            editable: true
        },
        {
            key: 'consumerPrice', //name
            name: 'Price per Bag', //Name
            editable: true
        },
        {
            key: 'ozInBag', //name
            name: 'oz/Bag', //Name
            editable: true
        },
        {
            key: 'isDecaf',
            name: 'Decaf',
            editor: PrioritiesEditor
        },
        {
            key: 'isActive',
            name: 'Is Active',
            editor: ActiveEditor
        },
        {
            key: 'tags', //name
            name: 'Tags', //Name
            editable: true
        },
        {
            key: 'description', //name
            name: 'Description', //Name
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
        this.handleAddRowBind = this.handleAddRow.bind(this);
    }

    rowGetter(i) {
        const key = this.props.ids[i];
        return this.props.items[key];
    }

    handleAddRow(e) {
        e.preventDefault();
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
        const toggleClass = 'pt1 pointer tracked';

        return (
            <div>
                <ReactDataGrid
                    enableCellSelect
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.props.ids.length}
                    minHeight={500}
                    onGridRowsUpdated={this.props.handleUpdateBeans}
                    />
                {
                    !this.state.showAdd &&
                        (<div className={toggleClass} onClick={this.handleAddToggle}>[+] Add Beans</div>)
                }
                {
                    this.state.showAdd &&
                    (
                        <div>
                            <div className={toggleClass} onClick={this.handleAddToggle}>[-] Add Beans</div>
                            <InventoryInput/>
                        </div>
                    )
                }
            </div>
        );
    }
}

Inventory.propTypes = {
    ids: PropTypes.array,
    items: PropTypes.object
};

export default Inventory;
