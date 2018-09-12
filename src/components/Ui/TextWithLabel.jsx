import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from './Grid';


export const TextWithLabel = ({labelText, children, gridValue, singleLine}) => (
  <Grid value={gridValue} container>
    <Grid value={singleLine ? 6 : 12}>
      { `${labelText}:` }
    </Grid>
    <Grid value={singleLine ? 6 : 12}>
      { children }
    </Grid>
  </Grid>
);

TextWithLabel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  labelText: PropTypes.string.isRequired,
  gridValue: PropTypes.number,
  singleLine: PropTypes.bool,
};

TextWithLabel.defaultProps = {
  gridValue: 3,
  singleLine: false,
};

export default TextWithLabel;
