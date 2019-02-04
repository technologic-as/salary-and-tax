import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

const renderTextField = ({ label, input }) => (
  <TextField
    name={input.name}
    label={label}
    value={input.value}
    onChange={input.onChange}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export const InputWithLabel = ({ name, label }) => (
  <Field name={name} component={renderTextField} label={label} />
);

InputWithLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputWithLabel;
