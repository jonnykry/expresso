import React, {Component, PropTypes} from 'react';
import Select from 'react-select';
import {Link} from 'react-router';
import SuccessMessage from '../../SuccessMessage';

class OrderEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false
        };
    }

    render() {
        const btnClass = 'self-center b ph3 pv2 input-reset ba b--white white bg-green grow pointer f6 dib';
        const linkClass = 'no-underline black w-50';

        let item = {};
        if (this.props.id) {
            item = this.props.items[this.props.id];
        }

        const shipmentUrl = '/dashboard/roaster/orders/' + item.id + '/shipment';
        console.log(shipmentUrl);

        return (
            <div>
                <SuccessMessage success={this.props.success} message={this.props.id ? 'Successfully edited ' + item.name + '.' : 'Successfully added beans.'}/>
                <div className="pa1 pa1-ns w-100">
                    {   
                        !item.labelUrl &&
                        <Link to={shipmentUrl} className={linkClass + ' mr2'}>
                            <div className={btnClass + ' mt3'}>
                                Get Shipment Label
                            </div>
                        </Link>
                    }
                </div>
            </div>
        );
    }
}

OrderEdit.propTypes = {
    id: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    items: PropTypes.object
};

export default OrderEdit;
