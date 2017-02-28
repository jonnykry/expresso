import React, {Component, PropTypes} from 'react';

import Receipt from './Receipt';
import ErrorMessage from './../../ErrorMessage';
import Loading from './../../Loading';

class ReceiptList extends Component {

    render() {
        return (
            <div className="cf fr w-60 pa4 pa4-ns">
                <ErrorMessage error={this.props.error}/>
                {this.props.items && this.props.ids.map(key =>
                    <Receipt item={this.props.items[key]} key={key}/>
                )}
                <Loading fetching={this.props.fetching} length={this.props.items.length}/>
            </div>
        );
    }
}

ReceiptList.propTypes = {
    error: PropTypes.string,
    ids: PropTypes.array,
    items: PropTypes.object,
    fetching: PropTypes.bool
};

export default ReceiptList;
