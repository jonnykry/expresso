import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';

import BooleanFormatter from '../inventory/BooleanFormatter';
import LabelFormatter from './LabelFormatter';

class Order extends Component {
    constructor(props) {
        super(props);

        this._columns = [{
            key: 'name',
            name: 'Coffee Name'
        }, {
            key: 'coffeeType',
            name: 'Coffee Type'
        }, {
            key: 'ozInBag',
            name: 'oz',
            width: 50
        }, {
            key: 'quantity',
            name: '# of Bags',
            width: 90
        }, {
            key: 'status',
            name: 'Status',
            width: 110
        }, {
            key: 'labelUrl',
            name: 'Label Link',
            formatter: LabelFormatter,
            width: 180
        }, {
            key: 'requestDate',
            name: 'Request Date'
        }, {
            key: 'shipDate',
            name: 'Ship Date'
        }];

        this.rowGetterBind = this.rowGetter.bind(this);
    }

    rowGetter(i) {
        const key = this.props.ids[i];
        const order = this.props.items[key];
        const item = this.props.beans[order.itemId] || {};
        const shipDate = new Date(order.shipDate);
        const dateString = shipDate.getFullYear() < 1970 ? 'N/A' : shipDate.toLocaleDateString();
        const row = {
            id: order.id,
            name: item.name,
            coffeeType: item.coffeeType,
            ozInBag: item.ozInBag,
            quantity: order.quantity,
            status: order.status,
            labelUrl: {
                url: order.labelUrl,
                id: order.id
            },
            requestDate: new Date(order.requestDate).toLocaleDateString(),
            shipDate: dateString
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
                    onRowClick={this.props.onRowClick} />
            </div>
        );
    }
}

Order.propTypes = {
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    beans: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
    modify: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired
};

export default Order;
