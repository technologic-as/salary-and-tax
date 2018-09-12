import CB from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';


const renderCheckbox = ({input, label}) => (
  <FormControlLabel
    control={(
      <CB
        checked={!!input.value}
        onChange={input.onChange}
      />
)}
    label={label}
  />
);
renderCheckbox.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export const Checkbox = ({name, label}) => (<Field name={name} component={renderCheckbox} label={label} />);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
