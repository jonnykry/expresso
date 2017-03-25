import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateRoaster} from '../../../actions/roasterActions';

import AccountInfo from '../../AccountInfo';

class RoasterAccount extends Component {
    constructor(props) {
        super(props);

        this.updateBind = this.handleSubmit.bind(this);
    }

    handleSubmit(refs) {
        const {dispatch} = this.props;
        const {name, email, phone, addressLine1, addressLine2, city, state, zipCode, country} = refs;

        const data = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            addressLine1: addressLine1.value,
            addressLine2: addressLine2.value,
            addressCity: city.value,
            addressState: state.value,
            addressZip: zipCode.value,
            addressCountry: country.value
        };

        dispatch(updateRoaster(data, this.props.roaster.id));
    }

    render() {
        return (
            <div className="h-100 min-h- overflow-y-auto">
                <main className="h-100 min-h-100 pa4 black-80">
                    <AccountInfo
                        roaster
                        user={this.props.roaster}
                        handleSubmit={this.updateBind}
                        legend={'Roaster Account'}
                        submitText={'Update Information'}
                        />
                </main>
            </div>
        );
    }
}

RoasterAccount.propTypes = {
    roaster: PropTypes.object,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        roaster: state.roaster.roaster
    };
}

export default connect(mapStateToProps)(RoasterAccount);
