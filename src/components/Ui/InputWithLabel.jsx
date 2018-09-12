import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';


const renderTextField = ({name, label, input}) => {
  return (<TextField name={name} label={label} value={input.value} onChange={input.onChange} />);
};

renderTextField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOf(PropTypes.string, PropTypes.number).isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export const InputWithLabel = ({name, label}) => (
  <Field name={name} component={renderTextField} label={label} />);

InputWithLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

InputWithLabel.defaultProps = {
  component: 'input',
  type: 'text',
};

export default InputWithLabel;
