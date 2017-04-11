import React, {Component, PropTypes} from 'react';

class BeanItemImage extends Component {
    render() {
        return (
            <img className="center db" alt={this.props.alt} src={this.props.src || 'https://s3.amazonaws.com/warehouse-profile/coffee_beans.png'}/>
        );
    }
}

BeanItemImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

export default BeanItemImage;
