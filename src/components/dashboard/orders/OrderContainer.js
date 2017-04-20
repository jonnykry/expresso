import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getUserInfo} from '../../../actions/userActions';
// import {getRoasterItems} from '../../../actions/roasterActions';
import {getOrders, getRoasterOrders} from '../../../actions/roasterActions';
import {addOrder, uploadImage, updateOrder} from '../../../actions/warehouseActions';
import ActionUtil from '../../../actions/actionUtil';
import Order from './Order';
import Loading from '../../Loading';

class OrderContainer extends Component {
    constructor(props) {
        super(props);

        this.handleRowClickBind = this.handleRowClick.bind(this);

        this.state = {
            tags: [],
            image: '',
            status: {},
            selected: '',
            selectedTags: [],
            eimage: '',
            estatus: {},
            send: false,
            ordersReceived: false
        };

        this.editHandlers = {
            name: this._ref('ename'),
            onAddType: this.getAddType('estatus'),
            bags: this._ref('ebags'),
            size: () => {},
            price: () => {},
            isDecaf: this._ref('eisDecaf'),
            isActive: this._ref('eisActive'),
            description: this._ref('edescription'),
            photo: this.handleEditPhoto.bind(this),
            onAddBeans: this.handleEditBeans.bind(this)
        };
    }

    componentWillMount() {
        this.props.dispatch(getUserInfo());
    }

    componentWillReceiveProps(next) {
        if (next.modify.success && (this.state.send || this.state.esend)) {
            this.handleSuccess();
            return;
        }

        if (!this.props.roaster.id || !this.props.next) {
            return;
        }

        // this.props.dispatch(getRoasterOrders(this.props.roaster.id, 0, 100)).then(() => {
        //     this.setState({ordersReceived: true});
        // });
        this.props.dispatch(getOrders(this.props.roaster.id, 0, 100)).then(() => {
            this.setState({ordersReceived: true});
        });
    }

    handleSuccess() {
        if (this.state.send) {
            this.name.value = '';
            this.bags.value = '';
            this.price.value = '';
            this.isDecaf.value = false;
            this.isActive.value = false;
            this.description.value = '';
            this.size.value = '';
            this.setState({send: false, status: {}, image: '', tags: []});
        }

        if (this.state.esend) {
            this.ename.value = '';
            this.ebags.value = '';
            this.eisDecaf.value = false;
            this.eisActive.value = false;
            this.edescription.value = '';
            this.setState({selected: '', esend: false, estatus: {}, eimage: '', etags: []});
        }

        // this.props.dispatch(getRoasterOrders(this.props.roaster.id, 0, 100));
        this.props.dispatch(getOrders(this.props.roaster.id, 0, 100));
    }

    handleEditBeans(e) {
        e.preventDefault();

        const {dispatch} = this.props;
        this.setState({esend: true});

        const status = this.state.estatus.value;

        let bean = this.props.items[this.state.selected];
        bean.Status = status;

        dispatch(updateOrder(bean)).then(() => {
            if (!this.ephoto) {
                return;
            }
            if (!this.state.selected) {
                dispatch(ActionUtil.error(400, 'Unable to upload image.'));
                return;
            }

            dispatch(uploadImage(this.ephoto, this.state.selected));
        });
    }

    getAddType(key) {
        return (status => {
            let obj = {};
            obj[key] = status;
            this.setState(obj);
        });
    }

    handleEditPhoto(file) {
        const fileReader = new FileReader();

        fileReader.onload = (e => {
            this.setState({eimage: e.target.result});
        });

        fileReader.readAsDataURL(file);

        this.ephoto = file;
    }

    handleRowClick(i) {
        const id = this.props.ids[i];
        this.setState({selected: id});
        let status = this.props.items[id].Status;
        this.setState({estatus: {value: status, label: status}});
    }

    getNumber(s) {
        const trimmed = s.trim().replace(/[^\d.-]/g, '');
        const parsed = parseFloat(trimmed);
        if (isNaN(parsed) || !isFinite(s)) {
            return null;
        }

        return parsed;
    }

    _ref(value) {
        return (i => {
            this[value] = i;
        });
    }

    render() {
        if(!this.state.ordersReceived) {
            return <Loading fetching={true} />
        }
        else {
            return (
                <div>
                    <Order
                        ids={this.props.ids}
                        items={this.props.items}
                        input={this.inputHandlers}
                        edit={this.editHandlers}
                        modify={this.props.modify}
                        onRowClick={this.handleRowClickBind}
                        selected={this.state.selected}
                        image={this.state.image}
                        eimage={this.state.eimage}
                        tags={this.state.tags}
                        etags={this.state.selectedTags}
                        status={this.state.status}
                        estatus={this.state.estatus}
                        />
                </div>
            );
        }
    }
}

OrderContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired,
    roaster: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        roaster: state.roaster.roaster,
        ids: state.roasterOrders.ids,
        items: state.roasterOrders.items,
        next: state.roasterOrders.next,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(OrderContainer);
