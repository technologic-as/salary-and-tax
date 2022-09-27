import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Field } from 'redux-form';
import { InputProps } from '../../constants';

type TextFieldProps = {
  input: InputProps;
  label: string;
};

const renderTextField = ({ label, input }: TextFieldProps) => (
  <TextField name={input.name} label={label} value={input.value} onChange={input.onChange} />
);

type Props = { name: string; label: string };

export const InputWithLabel = ({ name, label }: Props) => (
  <Field name={name} component={renderTextField} label={label} />
);

export default InputWithLabel;
