import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
import OrderEdit from './OrderEdit';
import BooleanFormatter from '../inventory/BooleanFormatter';

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
        const key = this.props.ids[i];
        const order = this.props.items[key];
        const item = this.props.beans[order.itemId] || {};
        const row = {
            name: item.name,
            coffeeType: item.coffeeType,
            ozInBag: item.ozInBag,
            quantity: order.quantity,
            status: order.status,
            labelUrl: "labelurl",
            requestDate: new Date(order.requestDate).toLocaleDateString(),
            shipDate: new Date(order.shipDate).toLocaleDateString()
        };
        return row;
    }

    render() {
        return (
            <div>
                <ReactDataGrid
                    columns={this._columns}
                    rowGetter={this.rowGetterBind}
                    rowsCount={this.props.ids.length}
                    minHeight={400}
                    onRowClick={this.props.onRowClick}
                    />
            </div>
        );
    }
}

Order.propTypes = {
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    beans: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired
};

export default Order;
