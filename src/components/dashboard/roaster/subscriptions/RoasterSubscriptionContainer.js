import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSubscriptionsByRoaster} from '../../../../actions/covenantActions';
import {getUserInfo} from '../../../../actions/userActions';
import InfiniteList from '../../InfiniteList';
import SuccessMessage from '../../../SuccessMessage';
import RoasterSubscriptionList from './RoasterSubscriptionList';

class RoasterSubscriptionContainer extends Component {
	constructor(props) {
		super(props);

		this.updateBind = this.update.bind(this);
	}

    componentDidMount() {
        this.props.dispatch(getUserInfo()).then(() => {
            this.update(1, false);
        });
    }

    update(page, reset) {
        const {dispatch} = this.props;

        const limit = 10;
        let offset = (page - 1) * limit;
        dispatch(getSubscriptionsByRoaster(this.props.roaster.id, reset ? 0 : offset, limit)).then(() => {
          console.log(this.props.items);  
        });
    }

	render () {
		return (
			<div className="content h-100 min-h-100 relative overflow-y-auto pt4">
				<InfiniteList ready={this.props.roaster.id} update={this.updateBind} {...this.props.items}>
					<SuccessMessage success={this.props.modify.success} message={'Success'}/>
					<h1 className="center f1-l mt2 b">
						Subscriptions
					</h1>
					<RoasterSubscriptionList {...this.props.items} />
				</InfiniteList>
			</div>
		);
	}
}

RoasterSubscriptionContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object,
    roaster: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.subscriptions,
        modify: state.modify,
        roaster: state.roaster.roaster
    };
}

export default connect(mapStateToProps)(RoasterSubscriptionContainer);
