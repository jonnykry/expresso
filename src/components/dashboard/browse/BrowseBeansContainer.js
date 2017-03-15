import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllItems} from '../../../actions/warehouseActions';

import BeanItemList from './BeanItemList';
import ViewDetailsModal from './ViewDetailsModal';
import SubscribeModal from './SubscribeModal';

class BrowseBeansContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: {},
            isSubscribeOpen: false,
            isViewDetailsOpen: false
        }

        this.onViewDetailsClick = this.onViewDetailsClick.bind(this);
        this.onSubscribeClick = this.onSubscribeClick.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    componentDidMount() {
        this.update();
    }

    update() {
        const {dispatch} = this.props;
        let offset = this.props.beanReducer.cursor;

        dispatch(getAllItems(offset, 20));
    }

    onViewDetailsClick(item) {
        // TODO:  
        // Fetch additional information for the item (e.g., roaster information)

        this.setState({
            selectedItem: item || {},
            isViewDetailsOpen: item !== {}
        });
    }

    onSubscribeClick(item) {
        this.setState({
            selectedItem: item || {},
            isSubscribeOpen: item !== {}
        });
    }

    onSubscribe() {
        // TODO:
        // This is a callback from the SubscribeModal.
        // Subscribe the current user passing this.state.selectedItem and this.props.user
        console.log('Subscribing to: ', this.state.selectedItem);
    }

    onCloseModal() {
        this.setState({
            selectedItem: {},
            isViewDetailsOpen: false,
            isSubscribeOpen: false
        });
    }

    render() {
        const viewDetailsModal = <ViewDetailsModal item={this.state.selectedItem} isOpen={this.state.isViewDetailsOpen} closeModal={this.onCloseModal} />;
        const subscribeModal = <SubscribeModal item={this.state.selectedItem} isOpen={this.state.isSubscribeOpen} closeModal={this.onCloseModal} />;

        return (
            <div>
                <h1 className="tc f1-l mt2 b">
                    Browse Beans
                </h1>
                <BeanItemList {...this.props.beanReducer}
                    onViewDetailsClick={this.onViewDetailsClick}
                    onSubscribeClick={this.onSubscribeClick} />
                {viewDetailsModal}
                {subscribeModal} 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        beanReducer: state.beans
    };
}

export default connect(mapStateToProps)(BrowseBeansContainer);
