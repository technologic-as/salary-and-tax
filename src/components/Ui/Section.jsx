import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';


export const Section = ({header, children}) => (
  <Card>
    <CardContent>
      <Typography variant="headline" component="h2">{header}</Typography>
      { children }
    </CardContent>
  </Card>
);

Section.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
