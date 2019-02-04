import B from '@material-ui/core/Button';
import { forbidExtraProps } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ type, disabled, color, children, ...other }) => (
  <B
    variant="outlined"
    color={color}
    type={type}
    disabled={disabled}
    {...other}
  >
    {children}
  </B>
);

Button.propTypes = forbidExtraProps({
  type: PropTypes.string,
  href: PropTypes.string,
  style: PropTypes.shape({}),
  disabled: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
});

Button.defaultProps = {
  disabled: false,
  color: 'primary',
  type: 'text',
  href: undefined,
  style: undefined,
};

export default Button;
