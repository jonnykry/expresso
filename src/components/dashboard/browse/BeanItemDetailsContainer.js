import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import BeanItemDetails from './BeanItemDetails';

import {getItem} from '../../../actions/warehouseActions';
import {getRoasterItems} from '../../../actions/roasterActions';

class BeanItemDetailsContainer extends Component {    
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update(1, false);
    }

    update(page, reset) {
        const {dispatch, params} = this.props;

        dispatch(getItem(params.id)).then(() => {
           const limit = 10;
            let offset = (page - 1) * limit;
            dispatch(getRoasterItems(this.props.bean.roasterId, reset ? 0 : offset, limit));
        });
    }

    render() {
        return (
            <div className="content h-100 min-h-100 overflow-y-auto">
                <BeanItemDetails update={this.update} params={this.props.params} bean={this.props.bean} roaster={this.props.roaster} items={this.props.items} />
            </div>
        );
    }
}

BeanItemDetailsContainer.propTypes = {
    params: PropTypes.object.isRequired,
    bean: PropTypes.object,
    roaster: PropTypes.object,
    fetching:  PropTypes.bool,
    error: PropTypes.string,
    items: PropTypes.object
};

function mapStateToProps(state) {
    return {
        bean: state.bean.item,
        roaster: state.roaster.roaster,
        fetching: state.bean.fetching,
        error: state.bean.error,
        items: state.roasterItems
    };
}

export default connect(mapStateToProps)(BeanItemDetailsContainer);