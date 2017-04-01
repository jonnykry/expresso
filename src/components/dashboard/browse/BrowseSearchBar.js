import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import DebounceInput from 'react-debounce-input';

import 'react-select/dist/react-select.css';

class BeanSearchBar extends Component {
    render() {
        const options = [
            { value: 1, label: 'Bean Name (asc.)' },
            { value: 2, label: 'Bean Name (desc.)' },
            { value: 3, label: 'Cost (low -> high)' },
            { value: 4, label: 'Cost (high -> low)' }
        ];
        
        return (
            <div className="bean-item-card w-40 center ph1 flex flex-row">
                <span className="w-100 ba border-box br2 b--light-silver">
                    <DebounceInput
                        ref={(input) => { this.searchInput = input; }}
                        placeholder="Search by Name or Roast Type" 
                        className="pv1 ph3 input-reset bn w-90 h-100"
                        value={this.props.value}
                        minLength={2}
                        debounceTimeout={400}
                        onChange={this.props.onSearchChange} />
                        <span onClick={this.props.onClear} className="pointer silver pl3">X</span>
                </span>
                <div className="pl2 w-50">
                    <Select options={options}
                            simpleValue
                            value={this.props.selected}
                            placeholder="Order Results"
                            onChange={this.props.onOrderChange} />
                </div>
            </div>
        );
    }
}

BeanSearchBar.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    onOrderChange: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired
};

export default BeanSearchBar;