import React, {Component, PropTypes} from 'react';

class BeanItemImage extends Component {
    render() {
        // <img className="center db" alt={this.props.alt} src={this.props.src || 'https://s3.amazonaws.com/warehouse-profile/coffee_beans.png'}/>
        const src = this.props.src || 'https://s3.amazonaws.com/warehouse-profile/coffee_beans.png';
        const style = {
            backgroundImage: 'url(' + src + ')',
            backgroundPosition: 'center'
        };
        return (
            <article className="mw5 mw6-ns center pt4">
                <div className="aspect-ratio aspect-ratio--1x1 mb4">
                    <div className="aspect-ratio--object cover" style={style}/>
                </div>
            </article>
        );
    }
}

BeanItemImage.propTypes = {
    src: PropTypes.string
};

export default BeanItemImage;
