import PropTypes from 'prop-types';
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { Section } from './Ui';


const messages = defineMessages({
  header: {id: 'surplus.graph.header', defaultMessage: 'Income vs. surplus'},
});

export const SurplusGraphComponent = ({graph, intl: {formatMessage}}) => {
  return (
    <Section header={formatMessage(messages.header)}>
      <ReactHighcharts config={graph} />
    </Section>
);
};

SurplusGraphComponent.propTypes = {
  intl: intlShape.isRequired,
  graph: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({graph}) => ({graph});

const mapDispatchToProps = () => ({});

export const SurplusGraph = connect(mapStateToProps, mapDispatchToProps)(injectIntl(SurplusGraphComponent));

export default SurplusGraph;
