import PropTypes from 'prop-types';
import React from 'react';


export const getGridClass = (value, nopad) => (`p-g-${value} ${nopad ? 'p-g-nopad' : ''}`);

export const Grid = ({value, nopad, children}) => (<div className={getGridClass(value, nopad)}>{ children }</div>);

Grid.propTypes = {
  value: PropTypes.number.isRequired,
  nopad: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element, PropTypes.arrayOf(PropTypes.node)]).isRequired
};

Grid.defaultProps = {
  nopad: false,
};

export default Grid;
