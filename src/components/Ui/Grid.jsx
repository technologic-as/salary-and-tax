import G from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';


export const Grid = ({value, children, container}) => (<G xs={value} container={container} item={!container}>{ children }</G>);

Grid.propTypes = {
  value: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  container: PropTypes.bool,
};

Grid.defaultProps = {
  container: false,
};

export default Grid;
