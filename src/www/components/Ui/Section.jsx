import { Panel } from 'primereact/panel';
import PropTypes from 'prop-types';
import React from 'react';


export const Section = ({header, children}) => (
  <Panel header={header}>
    { children }
  </Panel>
);

Section.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Section;
