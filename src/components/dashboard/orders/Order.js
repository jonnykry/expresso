import React, {Component, PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
// import {update} from 'react-addons-update';
// import {Editors, Formatters} from 'react-data-grid-addons';

import OrderEdit from './OrderEdit';
import BooleanFormatter from './BooleanFormatter';
import ArrayFormatter from './ArrayFormatter';

class Order extends Component {
    constructor(props) {
        super(props);

       this._columns = [{
            key: 'id',
            name: 'Order ID'
        },
        {
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
            name: 'Number of Bags',
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

        this.rowGetterBind = this.rowGetter.bind(this);
    }

    rowGetter(i) {
        const key = this.props.ids[i];
        const order = this.props.items[key];
        const row = {
            id: order.id,//order.name,
            name: "TBD name",
            coffeeType: "TBD type",
            ozInBag: "TBD oz",
            isDecaf: true,
            quantity: order.quantity,//order.quantity,
            status: order.Status,//order.tags,
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
                        image={this.props.eimage}
                        tags={this.props.etags}
                        status={this.props.estatus}
                        {...this.props.edit} />}
            </div>
        );
    }
}

Order.propTypes = {
    ids: PropTypes.array.isRequired,    
    items: PropTypes.object.isRequired,
    // input: PropTypes.object.isRequired,
    edit: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
    modify: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired,
    image: PropTypes.string,
    eimage: PropTypes.string,
    tags: PropTypes.array.isRequired,
    etags: PropTypes.array.isRequired,
    status: PropTypes.object.isRequired,
    estatus: PropTypes.object.isRequired
};

export default Order;
