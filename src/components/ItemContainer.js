import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../actions/itemActions';
import ItemList from './ItemList';
import ItemInput from './ItemInput';

class ItemContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    render() {
        const { items } = this.props;

        return (
            <div>
                <ItemInput addItem={this.props.actions.addItem} />
                <ItemList items={items} />
            </div>
        );
    }
}

ItemContainer.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
