import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getRoasterItems} from '../../../actions/roasterActions';
import {addItem, uploadImage, updateItem} from '../../../actions/warehouseActions';
import ActionUtil from '../../../actions/actionUtil';
import Loading from '../../Loading';
import SuccessMessage from '../../SuccessMessage';
import Inventory from './Inventory';

class InventoryContainer extends Component {
    constructor(props) {
        super(props);

        this.handleRowClickBind = this.handleRowClick.bind(this);

        this.state = {
            tags: [],
            image: '',
            type: {},
            selected: '',
            selectedTags: [],
            eimage: '',
            etype: {},
            showItems: false
        };

        this.inputHandlers = {
            name: this._ref('name'),
            onAddType: this.getAddType('type'),
            bags: this._ref('bags'),
            size: this._ref('size'),
            price: this._ref('price'),
            isDecaf: this._ref('isDecaf'),
            isActive: this._ref('isActive'),
            description: this._ref('description'),
            photo: this.handlePhoto.bind(this),
            onAddTag: this.getAddTag('tags'),
            onAddBeans: this.handleAddBeans.bind(this)
        };
        this.editHandlers = {
            name: this._ref('ename'),
            onAddType: this.getAddType('etype'),
            bags: this._ref('ebags'),
            size: () => {},
            price: () => {},
            isDecaf: this._ref('eisDecaf'),
            isActive: this._ref('eisActive'),
            description: this._ref('edescription'),
            photo: this.handleEditPhoto.bind(this),
            onAddTag: this.getAddTag('selectedTags'),
            onAddBeans: this.handleEditBeans.bind(this)
        };
    }

    componentDidMount() {
        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100)).then(() => {
            this.setState({showItems: true});
        });
    }

    handleSuccess() {
        this.name.value = '';
        this.bags.value = '';
        this.price.value = '';
        this.isDecaf.value = false;
        this.isActive.value = false;
        this.description.value = '';
        this.size.value = '';
        this.setState({type: {}, image: '', tags: []});

        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100)).then(() => {
            this.setState({itemsReceived: true});
        });
    }

    handleEditSuccess() {
        this.setState({selected: ''});

        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100));
        console.log("successful inventories 2");
    }

    handleAddBeans(e) {
        e.preventDefault();

        const {dispatch} = this.props;
        const bags = this.getNumber(this.bags.value);
        const ozInBag = this.getNumber(this.size.value);
        const price = this.getNumber(this.price.value);

        if (!bags) {
            dispatch(ActionUtil.error(400, 'Bags in Stock must be a number'));
            return;
        }
        if (!ozInBag) {
            dispatch(ActionUtil.error(400, 'Oz per bag must be a number'));
            return;
        }

        let tags = [];
        const keys = this.state.tags;
        for (let i = 0; i < keys.length; i++) {
            tags.push(keys[i].value);
        }

        const type = this.state.type.value;
        const bean = {
            name: this.name.value,
            coffeeType: type,
            inStockBags: bags,
            ozInBag: ozInBag,
            providerPrice: price,
            consumerPrice: price,
            isDecaf: this.isDecaf.value,
            isActive: this.isActive.value,
            description: this.description.value,
            roasterId: this.props.roaster.id,
            tags: tags
        };

        dispatch(addItem(bean)).then(() => {
            if (!this.photo) {
                this.handleSuccess();
                return;
            }
            const data = this.props.modify.data;

            if (!data.id) {
                dispatch(ActionUtil.error(400, 'Unable to upload image. Select the bean and try again'));
                this.handleSuccess();
                return;
            }

            dispatch(uploadImage(this.photo, data.id)).then(() => {
                this.handleSuccess();
            });
        });
    }

    handleEditBeans(e) {
        e.preventDefault();

        const {dispatch} = this.props;
        const bags = this.getNumber(this.ebags.value);

        if (!bags) {
            dispatch(ActionUtil.error(400, 'Bags in Stock must be a number'));
            return;
        }

        let tags = [];
        const keys = this.state.selectedTags;
        for (let i = 0; i < keys.length; i++) {
            tags.push(keys[i].value);
        }

        const type = this.state.etype.value;

        let bean = this.props.items[this.state.selected];
        bean.name = this.ename.value;
        bean.coffeeType = type;
        bean.inStockBags = bags;
        bean.isDecaf = this.eisDecaf.value;
        bean.isActive = this.eisActive.value;
        bean.description = this.edescription.value;
        bean.roasterId = this.props.roaster.id;
        bean.tags = tags;

        dispatch(updateItem(bean)).then(() => {
            if (!this.ephoto) {
                this.handleEditSuccess();
                return;
            }

            const data = this.props.modify.data;
            if (!data.id) {
                dispatch(ActionUtil.error(400, 'Unable to upload image. Select the bean and try again'));
                return;
            }

            this.handleEditSuccess();
            dispatch(uploadImage(this.ephoto, data.id)).then(() => {
            });
        });
    }

    getAddTag(key) {
        return (tag => {
            let obj = {};
            obj[key] = tag;
            this.setState(obj);
        });
    }

    getAddType(key) {
        return (type => {
            let obj = {};
            obj[key] = type;
            console.log(obj);
            console.log(this.isActive);
            this.setState(obj);
            console.log(this.isActive);
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

    handlePhoto(file) {
        const fileReader = new FileReader();

        fileReader.onload = (e => {
            this.setState({image: e.target.result});
        });

        fileReader.readAsDataURL(file);

        this.photo = file;
    }

    handleRowClick(i) {
        const id = this.props.ids[i];
        this.setState({selected: id});
        let tags = this.props.items[id].tags;
        let selected = [];
        for (let i = 0; i < tags.length; i++) {
            selected.push({value: tags[i], label: tags[i]});
        }
        let type = this.props.items[id].coffeeType;
        this.setState({selectedTags: selected});
        this.setState({etype: {value: type, label: type}});
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
        if (!this.state.showItems) {
            return (<Loading fetching/>);
        }
        return (
            <div>
                {this.state.showItems &&
                <div>
                    <SuccessMessage success={this.props.modify.success} message={'Success'}/>
                    <Inventory
                        onAddBeans={this.handleAddBeansBind}
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
                        type={this.state.type}
                        etype={this.state.etype}
                        />
                </div>
                }
            </div>
        );
    }
}

InventoryContainer.propTypes = {
    roaster: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        ids: state.roasterItems.ids,
        items: state.roasterItems.items,
        next: state.roasterItems.next,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(InventoryContainer);
