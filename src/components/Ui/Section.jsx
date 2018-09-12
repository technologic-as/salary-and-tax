import { Card } from 'primereact/card';
import PropTypes from 'prop-types';
import React from 'react';
import { getGridClass } from './Grid';


export const Section = ({header, children, gridValue, nopad}) => (
  <Card title={header} className={getGridClass(gridValue, nopad)}>
    { children }
  </Card>
);

Section.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  gridValue: PropTypes.number,
  nopad: PropTypes.bool,
};


Section.defaultProps = {
  gridValue: 12,
  nopad: false,
};

export default Section;
