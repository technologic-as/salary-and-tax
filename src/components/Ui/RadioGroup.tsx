import RG from '@material-ui/core/RadioGroup';
import React from 'react';
import { Field } from 'redux-form';
import { InputProps } from '../../constants';

type RenderProps = {
  input: InputProps;
  children: JSX.Element | JSX.Element[];
};

const renderRadioGroup = ({ input, children }: RenderProps) => (
  <RG name={input.name} value={input.value} onChange={input.onChange}>
    {children}
  </RG>
);

type Props = {
  name: string;
  children: JSX.Element | JSX.Element[];
};

export const RadioGroup = ({ name, children }: Props) => (
  <Field name={name} component={renderRadioGroup}>
    {children}
  </Field>
);

export default RadioGroup;
