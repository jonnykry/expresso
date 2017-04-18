import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import BeanItemDetails from './BeanItemDetails';

import {getItem} from '../../../actions/warehouseActions';
import {getRoasterItems, getRoaster} from '../../../actions/roasterActions';

class BeanItemDetailsContainer extends Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
        this.loadRoaster = this.loadRoaster.bind(this);
    }

    componentDidMount() {
        this.update(1, false, this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.id !== this.props.params.id) {
            this.update(1, true, nextProps.params.id);
            document.getElementById('topDiv').scrollTop = 0;
        }
    }

    update(page, reset, id) {
        const {dispatch} = this.props;

        if (this.props.bean[id]) {
            this.loadRoaster(page, reset, this.props.bean[id].roasterId);
            return;
        }

        dispatch(getItem(id)).then(() => {
            this.loadRoaster(page, reset, this.props.bean[id].roasterId);
        });
    }

    bean() {
        return this.props.bean[this.props.params.id];
    }

    loadRoaster(page, reset, id) {
        const {dispatch} = this.props;
        const limit = 10;
        const offset = (page - 1) * limit;

        if (!this.props.roasters[id]) {
            dispatch(getRoaster(id));
        }
        dispatch(getRoasterItems(id, reset ? 0 : offset, limit));
    }

    roaster() {
        if (!this.bean()) {
            return {};
        }

        return this.props.roasters[this.bean().roasterId];
    }

    render() {
        const bean = this.bean();
        const roaster = this.roaster();
        return (
            <div id="topDiv" className="content h-100 min-h-100 overflow-y-auto">
                {bean && roaster && this.props.items && <BeanItemDetails update={this.update} params={this.props.params} bean={bean} roaster={roaster} items={this.props.items}/>}
            </div>
        );
    }
}

BeanItemDetailsContainer.propTypes = {
    params: PropTypes.object.isRequired,
    bean: PropTypes.object,
    roasters: PropTypes.object,
    items: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        bean: state.beans.items,
        fetching: state.beans.fetching,
        roasters: state.roaster.roasters,
        error: state.beans.error,
        items: state.roasterItems
    };
}

export default connect(mapStateToProps)(BeanItemDetailsContainer);
