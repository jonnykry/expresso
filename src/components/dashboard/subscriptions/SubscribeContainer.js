import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getItem} from '../../../actions/warehouseActions';
import {createSubscription} from '../../../actions/covenantActions';
import Subscribe from './Subscribe';

class SubscribeContainer extends Component {
    constructor(props) {
        super(props);

        this.subscribe = this.subscribe.bind(this);
        this.quantity = this.quantity.bind(this);
        this.frequency = this.frequency.bind(this);

        this.state = {
            quantity: 1,
            frequency: 'MONTHLY'
        };
    }

    componentDidMount() {
        this.update(this.props.params.id);
    }

    update(id) {
        const {dispatch} = this.props;
        if (this.bean()) {
            return;
        }

        dispatch(getItem(id));
    }

    bean() {
        return this.props.beans[this.props.params.id];
    }

    subscribe() {
        const {dispatch} = this.props;

        const data = {
            userId: this.props.user.id,
            roasterId: this.bean().roasterId,
            itemId: this.bean().id,
            frequency: this.state.frequency,
            quantity: parseInt(this.state.quantity, 10)
        };

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
        const bean = this.bean();
        return (
            <div className="h-100 min-h-100">
                {
                    bean &&
                    <Subscribe
                        handleSubscribe={this.subscribe}
                        handleQuantity={this.quantity}
                        handleFrequency={this.frequency}
                        quantity={this.state.quantity}
                        frequency={this.state.frequency}
                        bean={bean}
                        quantityRef={this._quantity()}
                        />
                }

            </div>
        );
    }
}

SubscribeContainer.propTypes = {
    beans: PropTypes.object,
    user: PropTypes.object,
    router: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        beans: state.beans.items,
        fetching: state.beans.fetching,
        user: state.userReducer.user,
        subscribe: state.covenantReducer
    };
}

export default connect(mapStateToProps)(SubscribeContainer);
