import { Dropdown as DropDown } from 'primereact/dropdown';
import PropTypes from 'prop-types';
import React from 'react';


export const Dropdown = ({options, onChange, selectedOption}) => (
  <DropDown
    options={options}
    onChange={onChange}
    optionLabel="name"
    filter
    style={{width: '100%'}}
    value={selectedOption}
  />
);

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    selectedOption: PropTypes.shape({
        name: PropTypes.string,
    }),
};

Dropdown.defaultProps = {
    selectedOption :{}
};

export default Dropdown;
