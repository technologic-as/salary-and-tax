import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

type Props = {
  expanded?: boolean;
  header: string;
  children: JSX.Element | JSX.Element[];
};

export const Section = ({ header, children, expanded = false }: Props): JSX.Element => (
  <Accordion defaultExpanded={expanded}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography component="h2">{header}</Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default Section;
