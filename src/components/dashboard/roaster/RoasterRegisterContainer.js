import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoaster } from '../../../actions/roasterActions';

import AccountInfo from '../account/AccountInfo';

class RoasterRegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.registerBind = this.handleSubmit.bind(this);
    }
    handleSubmit(refs) {
        const { router, dispatch } = this.props;
        const { name, email, phone,
            addressLine1, addressLine2,
            city, state, zipCode, country } = refs;

        const data = {
            userId: this.props.user.id,
            roaster: {
                name: name.value,
                email: email.value,
                phone: phone.value,
                addressLine1: addressLine1.value,
                addressLine2: addressLine2.value,
                addressCity: city.value,
                addressState: state.value,
                addressZip: zipCode.value,
                addressCountry: country.value
            }
        };

        dispatch(createRoaster(data));

        router.replace('/dashboard/roaster/account');
    }

    render() {
        return (
            <div className="h-100 overflow-y-auto">
                <main className="pa4 black-80">
                    <AccountInfo
                        roaster={true}
                        handleSubmit={this.registerBind}
                        legend={'Register Roaster Account'}
                        submitText={'Register Roaster'} />
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error
    };
}

export default connect(mapStateToProps)(RoasterRegisterContainer);
