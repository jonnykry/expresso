import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
import {getAllItems2} from '../../../actions/warehouseActions';
import {getSubscription} from '../../../actions/covenantActions';
import OrderEdit from './OrderEdit';
import BooleanFormatter from '../inventory/BooleanFormatter';
import ArrayFormatter from '../inventory/ArrayFormatter';

class Order extends Component {
    constructor(props) {
        super(props);

       this._columns = [{
            key: 'name',
            name: 'Coffee Name'
        },
        {
            key: 'coffeeType',
            name: 'Coffee Type'
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
            key: 'quantity',
            name: '# of Bags',
            width: 90
        },
        {
            key: 'status',
            name: 'Status',
            width: 90
        },
        {
        key: 'labelUrl',
            name: 'Label Url',
            width: 90
        },
        {
            key: 'requestDate',
            name: 'Request Date'
        },
        {
            key: 'shipDate',
            name: 'Ship Date',
        }];

        this.beenRendered = false;
        this.rowGetterBind = this.rowGetter.bind(this);
    }

    rowGetter(i) {
        const orderID = this.props.ids[i];
        const subscriptionID = this.props.items[orderID].subscriptionId;
        const itemID = this.props.subItems[subscriptionID].itemId;
        const itemName = this.props.itemItems[itemID].name;
        const itemType = this.props.itemItems[itemID].coffeeType;
        const itemOzInBag = this.props.itemItems[itemID].ozInBag;

        const key = this.props.ids[i];
        const order = this.props.items[key];
        const row = {
            id: order.id,//order.name,
            name: itemName,
            coffeeType: itemType,
            ozInBag: itemOzInBag,
            isDecaf: true,
            quantity: order.quantity,//order.quantity,
            status: order.status,//order.tags,
            labelUrl: "labelurl",//erord.description,
            requestDate: new Date(order.requestDate).toLocaleDateString(),
            shipDate: new Date(order.shipDate).toLocaleDateString()
        };
        return row;
    }

    render() {
        const toggleClass = 'pv2 f5 b pl2 pointer tracked';

        return (
            <div>
                <ReactDataGrid
                    columns={this._columns}
                    rowGetter={this.rowGetterBind}
                    rowsCount={this.props.ids.length}
                    minHeight={400}
                    onRowClick={this.props.onRowClick}
                    />
                {this.props.selected &&
                    <OrderEdit
                        success={this.props.modify.success}
                        fetching={this.props.modify.fetching}
                        id={this.props.selected}
                        items={this.props.items}
                        />}
            </div>
        );
    }
}

Order.propTypes = {
    ids: PropTypes.array.isRequired, 
    items: PropTypes.object.isRequired,
    beans: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    modify: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired,
    subItems: PropTypes.object.isRequired,
    itemItems: PropTypes.object.isRequired,
    roaster: PropTypes.object.isRequired
};

export default Order;
