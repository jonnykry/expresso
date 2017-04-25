import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getRoasterOrders} from '../../../actions/roasterActions';
import Order from './Order';
import Loading from '../../Loading';

class OrderContainer extends Component {
    constructor(props) {
        super(props);

        this.handleRowClickBind = this.handleRowClick.bind(this);

        this.state = {
            selected: '',
            ordersReceived: false
        };
    }

    componentDidMount() {
        this.props.dispatch(getRoasterOrders(this.props.roaster.id, 0, 100)).then(() => {
            this.setState({showItems: true});
        });
    }

    componentWillReceiveProps(next) {
        if (!this.props.roaster.id || !this.props.next) {
            return;
        }

        this.props.dispatch(getRoasterOrders(this.props.roaster.id, 0, 100)).then(() => {
            this.setState({ordersReceived: true});
        });
    }

    handleSuccess() {
        this.props.dispatch(getRoasterOrders(this.props.roaster.id, 0, 100));
    }

    handleRowClick(i) {
        const id = this.props.ids[i];
        this.setState({selected: id});
    }

    _ref(value) {
        return (i => {
            this[value] = i;
        });
    }

    render() {
        if(!this.state.ordersReceived) {
            return <Loading fetching={true} />
        }
        else {
            return (
                <div>
                    <Order
                        ids={this.props.ids}
                        items={this.props.items}
                        modify={this.props.modify}
                        onRowClick={this.handleRowClickBind}
                        selected={this.state.selected}
                        />
                </div>
            );
        }
    }
}

OrderContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired,
    roaster: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        ids: state.roasterOrders.ids,
        items: state.roasterOrders.items,
        next: state.roasterOrders.next,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(OrderContainer);
