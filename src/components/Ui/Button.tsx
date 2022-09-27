import B from '@material-ui/core/Button';
import React from 'react';
import { PropTypes } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button/Button';

type Props = ButtonProps & {
  type?: 'button' | 'submit';
  href?: string;
  disabled?: boolean;
  color?: PropTypes.Color;
  children: string | number | JSX.Element;
};

export const Button = ({ type = 'button', disabled = false, color = 'primary', children, ...other }: Props) => (
  <B variant="outlined" color={color} type={type} disabled={disabled} {...other}>
    {children}
  </B>
);

export default Button;
