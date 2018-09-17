import RG from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';


const renderRadioGroup = ({label, input, children}) => (
  <RG name={input.name} label={label} value={input.value} onChange={input.onChange}>
    {children}
  </RG>
);

renderRadioGroup.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const RadioGroup = ({name, label, children}) => (
  <Field name={name} component={renderRadioGroup} label={label}>
    {children}
  </Field>
);

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};

export default RadioGroup;
