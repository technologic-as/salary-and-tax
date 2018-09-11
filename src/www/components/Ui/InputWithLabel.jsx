import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import { TextWithLabel } from './TextWithLabel';


export const InputWithLabel = ({fieldName, labelText, gridValue, component, type}) => (
  <TextWithLabel labelText={labelText} gridValue={gridValue}>
    <Field id={fieldName} name={fieldName} component={component} type={type} placeholder={labelText} />
  </TextWithLabel>
);

InputWithLabel.propTypes = {
  fieldName: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  gridValue: PropTypes.number,
  type: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
};

InputWithLabel.defaultProps = {
  gridValue: 6,
  component: 'input',
  type: 'text',
};

export default InputWithLabel;
