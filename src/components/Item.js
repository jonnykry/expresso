import React, { PropTypes } from 'react';

const Item = ({item}) => {
    return (
        <div>
            {item}
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.string.isRequired
};

export default Item;
