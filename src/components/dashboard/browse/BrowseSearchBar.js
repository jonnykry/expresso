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
                <span className="w-100 ba border-box br2 b--light-silver">
                    <input type="search"
                        ref={(input) => { this.searchInput = input; }}
                        placeholder="Search for a Bean" 
                        className="pv1 ph3 input-reset bn w-90 h-100"
                        onChange={this.props.onSearchChange} />
                        <span onClick={this.props.onClear.bind(this)} className="pointer silver pl3">X</span>
                </span>
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