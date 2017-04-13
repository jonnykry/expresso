import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {updateRoaster, uploadProfilePicture} from '../../../actions/roasterActions';

import RoasterAccountInfo from '../../RoasterAccountInfo';

class RoasterAccount extends Component {
    constructor(props) {
        super(props);

        this.profileImage = {
            src: null,
            file: null
        };

        this.onHandleSubmitBind = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const data = {
            id: this.props.roaster.id,
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            addressLine1: this.addressLine1.value,
            addressLine2: this.addressLine2.value,
            addressCity: this.city.value,
            addressState: this.state.value,
            addressZip: this.zipCode.value,
            addressCountry: this.country.value
        };

        dispatch(updateRoaster(data, this.props.roaster.id)).then(() => {
            if (this.profileImage.file) {
                dispatch(uploadProfilePicture(this.profileImage.file, this.props.roaster.id));
            }
        });
    }

    _addRef(name) {
        return (i => {
            this[name] = i;
        });
    }

    render() {
        return (
            <div className="h-100">
                <main className="h-100 min-h-100 pa4 black-80">
                    <RoasterAccountInfo
                        roaster={this.props.roaster}
                        handleSubmit={this.onHandleSubmitBind}
                        profileImage={this.profileImage}
                        name={this._addRef('name')}
                        email={this._addRef('email')}
                        phone={this._addRef('phone')}
                        addressLine1={this._addRef('addressLine1')}
                        addressLine2={this._addRef('addressLine2')}
                        city={this._addRef('city')}
                        state={this._addRef('state')}
                        zipCode={this._addRef('zipCode')}
                        country={this._addRef('country')}
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
