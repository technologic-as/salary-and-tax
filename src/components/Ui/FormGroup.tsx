import FormControl from '@material-ui/core/FormControl';
import FG from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import React from 'react';

type Props = { header: string; children: JSX.Element | JSX.Element[] };

export const FormGroup = ({ header, children }: Props) => (
  <FormControl component="fieldset" margin="normal">
    <FormLabel component="legend">{header}</FormLabel>
    <FG>{children}</FG>
  </FormControl>
);

export default FormGroup;
