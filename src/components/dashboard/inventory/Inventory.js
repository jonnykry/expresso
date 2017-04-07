import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
import {update} from 'react-addons-update';
import {Editors /* , Formatters */} from 'react-data-grid-addons';

import InventoryInput from './InventoryInput';

const {AutoComplete: AutoCompleteEditor /* , DropDownEditor */} = Editors;
// const {DropDownFormatter} = Formatters;

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
            name: 'Available',
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
        const toggleClass = 'pt2 pl2 pointer tracked';

        return (
            <div>
                <ReactDataGrid
                    enableCellSelect
                    columns={this._columns}
                    rowGetter={this.rowGetterBind}
                    rowsCount={this.props.ids.length}
                    minHeight={500}
                    onGridRowsUpdated={this.props.onUpdateBeans}
                    />
                {
                    !this.state.showAdd &&
                        (<div className={toggleClass} onClick={this.handleAddToggleBind}>[+] Add Beans</div>)
                }
                {
                    this.state.showAdd &&
                    (
                        <div>
                            <div className={toggleClass} onClick={this.handleAddToggleBind}>[-] Add Beans</div>
                            <InventoryInput onAddBeans={this.props.onAddBeans} {...this.props.input} success={this.props.modify.success} fetching={this.props.modify.fetching}/>
                        </div>
                    )
                }
            </div>
        );
    }
}

Inventory.propTypes = {
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired
};

export default Inventory;
