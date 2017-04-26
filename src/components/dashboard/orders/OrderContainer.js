import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getAllItems, getItem} from '../../../actions/warehouseActions';
import {getRoasterOrders} from '../../../actions/roasterActions';
import Loading from '../../Loading';
import Order from './Order';

class OrderContainer extends Component {
    constructor(props) {
        super(props);

        this.handleRowClickBind = this.handleRowClick.bind(this);

        this.state = {
            selected: '',
            showItems: false
        };
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getRoasterOrders(this.props.roaster.id, 0, 100)).then(() => {
            this.setState({showItems: true});

            for (let i = 0; i < this.props.ids.length; i++) {
                const id = this.props.ids[i];
                const {itemId} = this.props.items[id];
                if (this.props.beans[itemId]) {
                    continue;
                }

                dispatch(getItem(itemId));
            }
        });
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
        if (!this.state.showItems) {
            return <Loading fetching/>;
        }

        return (
            <div>
                <Order
                    beans={this.props.beans}
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

OrderContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired,
    roaster: PropTypes.object.isRequired,
    beans: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        ids: state.roasterOrders.ids,
        items: state.roasterOrders.items,
        beans: state.beans.items,
        next: state.roasterOrders.next,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(OrderContainer);
