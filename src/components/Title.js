import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';


class Title extends Component {
    render() {
        let location = '/title_black.svg';

        if (this.props.color && (this.props.color === 'white' || this.props.color === 'blue' || this.props.color === 'black')) {
            location = '/title_' + this.props.color + '.svg';
        }

        return (
            <Link to="/" className=" pt2 pointer tc f1 b i white no-underline">
                <img alt="expresso header" src={location} className="w-100" />
            </Link>
        );
    }
}

Title.propTypes = {
    color: PropTypes.string
};

export default Title;
