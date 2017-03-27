import React, {Component, PropTypes} from 'react';

import Trigger from './Trigger';
import Loading from './../../Loading';

class TriggerList extends Component {

    render() {
        return (
            <div className="fr w-60 pa4 pa4-ns">
                {this.props.items && this.props.ids.map(key =>
                    <Trigger activate={this.props.activate} delete={this.props.delete} key={key} item={this.props.items[key]}/>
                )}
                <Loading fetching={this.props.fetching} length={this.props.ids.length}/>
            </div>
        );
    }

}

TriggerList.propTypes = {
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    fetching: PropTypes.bool,
    activate: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
};

export default TriggerList;
