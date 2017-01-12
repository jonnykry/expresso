import React, { PropTypes, Component } from 'react';

class ItemInput extends Component {
    constructor(props) {
        super(props);

        this.onAddItemClick = this.onAddItemClick.bind(this);
    }

    onAddItemClick() {
        const itemElement = document.getElementById('item');
        this.props.addItem(itemElement);
        itemElement.value = "";
        itemElement.focus();
    }

    componentDidMount() {
        document.getElementById('item').focus();
    }

    render() {
        return (
            <div>
                <input id="item" type="text" placeholder="Item" />
                <button onClick={this.onAddItemClick}>Add Item</button>
            </div>
        );
    }
}

ItemInput.propTypes = {
    addItem: PropTypes.func.isRequired
};

export default ItemInput;
