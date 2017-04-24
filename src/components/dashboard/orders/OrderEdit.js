import React, {Component, PropTypes} from 'react';
import Select from 'react-select';
import {Link} from 'react-router';
import SuccessMessage from '../../SuccessMessage';

class OrderEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            types: [
                {value: "PENDING", label: "PENDING"},
                {value: "SHIPPED", label: "SHIPPED"},
                {value: "ARRIVED", label: "ARRIVED"},
                {value: "FINISHED", label: "FINISHED"}
            ]
        };
    }

    render() {
        const labelClass = 'b dib mb1 w-100';
        const btnClass = 'self-center b ph3 pv2 input-reset ba b--white white bg-green grow pointer f6 dib';
        const linkClass = 'no-underline black w-50';
        const combinedClass = 'f6 pa1 w-100 w-50-m w-third-l dib';

        let item = {};
        if (this.props.id) {
            item = this.props.items[this.props.id];
        }

        return (
            <div>
                <SuccessMessage success={this.props.success} message={this.props.id ? 'Successfully edited ' + item.name + '.' : 'Successfully added beans.'}/>
                <form key={this.props.id} onSubmit={this.props.onAddBeans} className="pa2 black-80">
                    <fieldset disabled={this.state.edit || this.props.fetching} className="bw0">
                        <div className="center w-100">
                            <div className={combinedClass+' v-top'}>
                                <label className={labelClass}>Status:</label>
                                <Select
                                    options={this.state.types}
                                    value={this.props.status}
                                    onChange={this.props.onAddType}
                                    />
                            </div>
                            
                            <div className="pa1 pa1-ns w-100">
                                <input className={btnClass} type="submit" value={this.props.id ? 'Edit Bean': 'Add Bean'}/>
                                <br />
                                {   
                                    !item.labelUrl &&
                                    <Link to={'/dashboard/orders/' + item.id + '/shipment'} className={linkClass + ' mr2'}>
                                        <div className={btnClass + ' mt3'}>
                                            Get Shipment Label
                                        </div>
                                    </Link>
                                }
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

OrderEdit.propTypes = {
    id: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    name: PropTypes.func.isRequired,
    bags: PropTypes.func.isRequired,
    photo: PropTypes.func.isRequired,
    image: PropTypes.string,
    onAddType: PropTypes.func.isRequired,
    onShipmentLabelClick: PropTypes.func.isRequired,
    status: PropTypes.object,
    items: PropTypes.object
};

export default OrderEdit;
