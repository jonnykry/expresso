import React, { Component, PropTypes } from 'react';
import Select from 'react-select';

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
                <input type="search"
                       placeholder="Search for a Bean" 
                       className="pv1 ph3 input-reset ba w-100 border-box br2 b--light-silver"
                       onChange={this.props.onSearchChange} />
                <div className="pl2 w-50">
                    <Select options={options}
                            simpleValue
                            value={this.props.selected}
                            placeholder="Choose a Filter"
                            onChange={this.props.onFilterChange} />
                </div>
            </div>
        );
    }
}

BeanSearchBar.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired
};

export default BeanSearchBar;