
import React, { PropTypes } from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div>
            {items.map((item) =>
                <Item key={item} item={item} />
            )}
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemList;
