import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import React from 'react';

export const Section = ({ header, children, expanded }) => (
  <ExpansionPanel defaultExpanded={expanded}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography component="h2">{header}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
  </ExpansionPanel>
);

Section.propTypes = {
  expanded: PropTypes.bool,
  header: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Section.defaultProps = {
  expanded: false,
};

export default Section;
