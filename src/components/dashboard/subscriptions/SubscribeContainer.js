import React, { Component } from 'react';
import {connect} from 'react-redux';
import Subscribe from './Subscribe';

import {getItem} from '../../../actions/warehouseActions';
import {createSubscription} from '../../../actions/covenantActions';


class SubscribeContainer extends Component {
    constructor(props) {
        super(props);

        this.subscribe = this.subscribe.bind(this);
        this.update = this.update.bind(this);
        this.quantity = this.quantity.bind(this);
        this.frequency = this.frequency.bind(this);

        this.state = {
            quantity: 1,
            frequency: "MONTHLY"
        };
	}

    componentDidMount() {
        this.update();
    }

    update() {
        const {dispatch, params} = this.props;

        dispatch(getItem(params.id));
    }

    subscribe() {
        const {dispatch} = this.props;

        const data = {
            userId: this.props.user.id,
            roasterId: this.props.bean.roasterId,
            itemId: this.props.bean.id,
            frequency: this.state.frequency,
            quantity: parseInt(this.state.quantity, 10)
        }

        dispatch(createSubscription(data)).then(this.props.router.replace('/dashboard/subscriptions'));
    }

    quantity(e) {
        let val = e.target.value;
        val = val > 10 ? 10 : val;

        this.quantityInput.value = val;

        this.setState({
            quantity: val
        });
    }

    frequency(val) {
        this.setState({
            frequency: val
        });
    }

    _quantity() {
        return (i => {
            this.quantityInput = i;
        });
    }

    render() {
        return (
            <div className="h-100 min-h-100">
                <Subscribe handleUpdate={this.update}
                    handleSubscribe={this.subscribe}
                    handleQuantity={this.quantity}
                    handleFrequency={this.frequency}
                    quantity={this.state.quantity}
                    frequency={this.state.frequency}
                    bean={this.props.bean}
                    quantityRef={this._quantity()} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bean: state.bean.item,
        fetching: state.bean.fetching,
        error: state.bean.error,
        user: state.userReducer.user,
        subscribe: state.covenantReducer
    };
}

export default connect(mapStateToProps)(SubscribeContainer);
