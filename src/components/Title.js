import React, {Component, PropTypes} from 'react';

class Title extends Component {
    render() {
        let location = '/title_black.svg';

        if (this.props.color && (this.props.color === 'white' || this.props.color === 'blue' || this.props.color === 'black')) {
            location = '/title_' + this.props.color + '.svg';
        }

        return (
            <object type="image/svg+xml" data={location} className="w-100 ma3"/>
        );
    }
}

Title.propTypes = {
    color: PropTypes.string
};

export default Title;
