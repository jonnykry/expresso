import React, {Component, PropTypes} from 'react';
import Select from 'react-select';
import FileSelector from '../../FileSelector';
import SuccessMessage from '../../SuccessMessage';
import BeanItemImage from '../browse/BeanItemImage';

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
        const inputClass = 'input-reset ba b--black-20 pa2 mt1 mb2 w-100';
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
                            <div className="w-50-l w-100 f6 pa2 fr">
                                <div className="w-50 pa1 center">
                                    <label className={labelClass}>Package Label Image:</label>
                                    <div className="ma1 ph5  ba">
                                        <BeanItemImage src={this.props.image || item.pictureURL || "https://www.nsoftware.com\/kb\/articles\/img\/UPSShippingLabel.gif"}/>
                                    </div>
                                </div>
                                <div className="w-50 pa1 center">
                                    <FileSelector
                                        fileSelected={this.props.photo}
                                        buttonText={'Upload Image'}
                                        />
                                </div>
                            </div>
                            <div className="pa3 pa3-ns w-100">
                                <input className="self-center b ph3 pv2 input-reset ba b--white white bg-green grow pointer f6 dib" type="submit" value={this.props.id ? 'Edit Bean': 'Add Bean'}/>
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
    status: PropTypes.object,
    items: PropTypes.object
};

export default OrderEdit;
