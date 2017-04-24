import React, {Component, PropTypes} from 'react';
import Select from 'react-select';
import FileSelector from '../../FileSelector';
import SuccessMessage from '../../SuccessMessage';

class OrderEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false
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
    items: PropTypes.object
};

export default OrderEdit;
