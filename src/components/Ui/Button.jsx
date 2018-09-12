import B from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';


export const Button = ({type, disabled, color, children}) => (
  <B variant="outlined" color={color} type={type} disabled={disabled}>{children}</B>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};

Button.defaultProps = {
  disabled: false,
  color: 'primary',
};

export default Button;
