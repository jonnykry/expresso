import React, {Component, PropTypes} from 'react';

import FaCheck from 'react-icons/lib/fa/check';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        const checked = this.props.value || false;
        this.state = {checked: checked};
        this.handleClickBind = this.handleClick.bind(this);

        this.sendValue(checked);
    }

    componentWillReceiveProps(next) {
        this.sendValue(next.value);
        this.setState({checked: next.value});
    }

    handleClick() {
        let checked = !this.state.checked;

        this.sendValue(checked);
        this.setState({checked: checked});
    }

    sendValue(v) {
        this.props.onChange({
            type: 'checkbox',
            value: v
        });
    }

    render() {
        return (
            <div className="pointer ba bw1 br2 dib tc v-mid b--light-gray ma2" style={{paddingTop: '2px', minWidth: '20px', minHeight: '20px'}} onClick={this.handleClickBind}>
                {this.state.checked && <FaCheck className="v-mid"/>}
            </div>
        );
    }
}

Checkbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool
};

export default Checkbox;
