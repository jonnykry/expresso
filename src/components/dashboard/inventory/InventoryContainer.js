import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getUserInfo} from '../../../actions/userActions';
import {getRoasterItems} from '../../../actions/roasterActions';
import {addItem, uploadImage} from '../../../actions/warehouseActions';
import ActionUtil from '../../../actions/actionUtil';
import Inventory from './Inventory';

class InventoryContainer extends Component {
    constructor(props) {
        super(props);

        this.handleRowClickBind = this.handleRowClick.bind(this);

        this.state = {
            tags: [],
            image: '',
            selected: '',
            selectedTags: []
        };

        this.inputHandlers = {
            name: this._ref('name'),
            type: this._ref('type'),
            bags: this._ref('bags'),
            size: this._ref('size'),
            price: this._ref('price'),
            isDecaf: this._ref('isDecaf'),
            isActive: this._ref('isActive'),
            description: this._ref('description'),
            photo: this.handlePhoto.bind(this),
            onAddTag: this.getAddTag('tags'),
            onDeleteTag: this.getDeleteTag('tags'),
            onAddBeans: this.handleAddBeans.bind(this),
            tags: this.state.tags
        };
        this.editHandlers = {
            name: this._ref('ename'),
            type: this._ref('etype'),
            bags: this._ref('ebags'),
            isDecaf: this._ref('eisDecaf'),
            isActive: this._ref('eisActive'),
            description: this._ref('edescription'),
            photo: this.handleEditPhoto.bind(this),
            onAddTag: this.getAddTag('selectedTags'),
            onDeleteTag: this.getDeleteTag('selectedTags'),
            onEditBeans: this.handleEditBeans.bind(this),
            tags: this.state.selectedTags
        };

        this.tags = {};
        this.selectedTags = {};
    }

    componentWillMount() {
        this.props.dispatch(getUserInfo());
    }

    componentWillReceiveProps() {
        if (this.props.modify.success) {
            this.handleAddSuccess();
        }

        if (!this.props.roaster.id || !this.props.next) {
            return;
        }

        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100));
    }

    handleAddSuccess() {
        this.name.value = '';
        this.type.value = '';
        this.bags.value = '';
        this.price.value = '';
        this.isDecaf.checked = false;
        this.isActive.checked = false;
        this.description.value = '';
        this.size.value = '';
        this.tags = {};
        this.setState({image: '', tags: []});

        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100));
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
        const keys = Object.keys(this.tags);
        for (let i = 0; i < keys.length; i++) {
            if (!this.tags[keys[i]]) {
                continue;
            }
            tags.push(keys[i]);
        }

        const bean = {
            name: this.name.value,
            coffeeType: this.type.value,
            inStockBags: bags,
            ozInBag: ozInBag,
            providerPrice: price,
            consumerPrice: price,
            isDecaf: this.isDecaf.checked,
            isActive: this.isActive.checked,
            description: this.description.value,
            roasterId: this.props.roaster.id,
            tags: tags
        };
        dispatch(addItem(bean)).then(() => {
            if (!this.photo) {
                return;
            }
            const data = this.props.modify.data;
            if (!data.id) {
                dispatch(ActionUtil.error(400, 'Unable to upload image.'));
            }

            dispatch(uploadImage(this.photo, data.id));
        });
    }

    getDeleteTag(key) {
        return (i => {
            let tags = this.state[key];
            this[key][tags[i].text] = false;
            tags.splice(i, 1);
            let obj = {};
            obj[key] = tags;
            this.setState(obj);
        });
    }

    getAddTag(key) {
        return (tag => {
            if (this[key][tag]) {
                return;
            }
            this[key][tag] = true;
            let tags = this.state[key];
            tags.push({text: tag});
            let obj = {};
            obj[key] = tags;
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

    handlePhoto(file) {
        const fileReader = new FileReader();

        fileReader.onload = (e => {
            this.setState({image: e.target.result});
        });

        fileReader.readAsDataURL(file);

        this.photo = file;
    }

    handleRowClick(i) {
        this.setState({selected: this.props.ids[i]});
        let tags = this.props.items[this.props.ids[i]].tags;
        let selected = [];
        for (let i = 0; i < tags.length; i++) {
            selected.push({text: tags[i]});
        }
        this.setState({selectedTags: selected});
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

    handleEditBeans(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Inventory
                    onAddBeans={this.handleAddBeansBind}
                    ids={this.props.ids}
                    items={this.props.items}
                    input={this.inputHandlers}
                    modify={this.props.modify}
                    onRowClick={this.handleRowClickBind}
                    selected={this.state.selected}
                    image={this.state.image}
                    eimage={this.state.eimage}
                    />
            </div>
        );
    }
}

InventoryContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired,
    roaster: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        roaster: state.roaster.roaster,
        ids: state.roasterItems.ids,
        items: state.roasterItems.items,
        next: state.roasterItems.next,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(InventoryContainer);
