import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createRoaster, uploadProfilePicture} from '../actions/roasterActions';

import RoasterAccountInfo from './RoasterAccountInfo';
import ErrorMessage from './ErrorMessage';

class RoasterRegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.profileImage = {
            src: null,
            file: null
        };

        this.birthday = {
            value: null
        };

        this.onHandleSubmitBind = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const {dispatch} = this.props;

        const data = {
            userId: this.props.user.id,
            roaster: {
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                addressLine1: this.addressLine1.value,
                addressLine2: this.addressLine2.value,
                addressCity: this.city.value,
                addressState: this.state.value,
                addressZip: this.zipCode.value,
                addressCountry: this.country.value,
                birth: this.birthday.value
            }
        };

        dispatch(createRoaster(data)).then(() => {
            if(this.profileImage.file != null) {
                dispatch(uploadProfilePicture(this.profileImage.file, this.props.roaster.id));
            }
            
            this.props.router.replace('/dashboard/roaster/inventory');
        });
    }

    _addRef(name) {
        return (i => {
            this[name] = i;
        });
    }

    render() {
        return (
            <div className="h-100 overflow-y-auto bg-blue">
                <main className="ph4 pv5 mw7 center black-80">
                    <ErrorMessage errors={this.props.errors}/>
                    <RoasterAccountInfo
                        handleSubmit={this.onHandleSubmitBind}
                        name={this._addRef('name')}
                        email={this._addRef('email')}
                        phone={this._addRef('phone')}
                        addressLine1={this._addRef('addressLine1')}
                        addressLine2={this._addRef('addressLine2')}
                        city={this._addRef('city')}
                        state={this._addRef('state')}
                        zipCode={this._addRef('zipCode')}
                        country={this._addRef('country')}
                        profileImage={this.profileImage}
                        birthday={this.birthday}
                        />
                </main>
            </div>
        );
    }
}

RoasterRegisterContainer.propTypes = {
    errors: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    roaster: PropTypes.object
};

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        roaster: state.roaster.roaster,
        errors: state.errors
    };
}

export default connect(mapStateToProps)(RoasterRegisterContainer);
