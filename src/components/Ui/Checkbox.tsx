import CB from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
import { Field } from 'redux-form';
import { InputProps } from '../../constants';

type RenderProps = {
  input: InputProps;
  label: string;
};

const renderCheckbox = ({ input, label }: RenderProps) => (
  <FormControlLabel control={<CB checked={!!input.value} onChange={input.onChange} />} label={label} />
);

type Props = {
  name: string;
  label: string;
};

export const Checkbox = ({ name, label }: Props) => (
  <Field name={name} component={renderCheckbox} label={label} type="input" />
);

export default Checkbox;
