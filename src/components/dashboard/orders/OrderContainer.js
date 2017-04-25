import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getAllItems2} from '../../../actions/warehouseActions';
import {getRoasterOrders} from '../../../actions/roasterActions';
import {getAllSubscriptions} from '../../../actions/covenantActions';
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
            this.props.dispatch(getAllItems2(0, 100)).then(() => {
                this.props.dispatch(getAllSubscriptions(0, 100)).then(() => {
                    this.setState({ordersReceived: true});
                    // console.log("got the items?");
                    console.log(this.props);
                });
            });
        });
    }

    componentWillReceiveProps(next) {
        if (!this.props.roaster.id || !this.props.next) {
            return;
        }

        this.props.dispatch(getRoasterOrders(this.props.roaster.id, 0, 100)).then(() => {
            this.props.dispatch(getAllItems2(0, 100)).then(() => {
                this.props.dispatch(getAllSubscriptions(0, 100)).then(() => {
                    this.setState({ordersReceived: true});
                });
            });
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
                        beans={this.props.beans}
                        items={this.props.items}
                        dispatch={this.props.dispatch}
                        modify={this.props.modify}
                        onRowClick={this.handleRowClickBind}
                        selected={this.state.selected}
                        itemItems={this.props.itemItems}
                        subItems={this.props.subItems}
                        roaster={this.props.roaster}
                        />
                </div>
            );
        }
    }
}

OrderContainer.propTypes = {
    beans: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired,
    itemItems: PropTypes.object.isRequired,
    subItems: PropTypes.object.isRequired,
    roaster: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        beans: state.beans.items,
        ids: state.roasterOrders.ids,
        items: state.roasterOrders.items,
        next: state.roasterOrders.next,
        itemItems: state.beans.items,
        subItems: state.subscriptions.items,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(OrderContainer);
