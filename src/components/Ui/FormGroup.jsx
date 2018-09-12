import FormControl from '@material-ui/core/FormControl';
import FG from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import React from 'react';


export const FormGroup = ({header, children}) => (
  <FormControl component="fieldset" margin="normal">
    <FormLabel component="legend">{ header }</FormLabel>
    <FG>
      { children }
    </FG>
  </FormControl>
);

FormGroup.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormGroup;
