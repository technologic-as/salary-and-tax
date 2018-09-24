import Highcharts from 'highcharts';
import addAnnotationsModule from 'highcharts/modules/annotations'
import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import {
  Chart, Credits, HighchartsChart, LineSeries, Title, Tooltip, withHighcharts, XAxis, YAxis,
} from 'react-jsx-highcharts';
import { connect } from 'react-redux';
import { Section } from './Ui';


addAnnotationsModule(Highcharts);

const messages = defineMessages({
  header: {
    id: 'surplus.graph.header',
    defaultMessage: 'Income vs. surplus',
  },
  chartHeader: {
    id: 'surplus.graph.chart.header',
    defaultMessage: 'Income vs. surplus',
  },
  xAxisTitle: {
    id: 'surplus.graph.x.axis.title',
    defaultMessage: 'Surplus',
  },
  yAxisTitle: {
    id: 'surplus.graph.y.axis.title',
    defaultMessage: 'NOK',
  },
  seriesIncome: {
    id: 'surplus.series.income',
    defaultMessage: 'Income',
  },
  seriesDividends: {
    id: 'surplus.series.dividends',
    defaultMessage: 'Dividends',
  },
  seriesTotal: {
    id: 'surplus.series.total',
    defaultMessage: 'Total',
  },
  suffix: {
    id: 'surplus.suffix',
    defaultMessage: 'NOK',
  },
});

export const SurplusGraphComponent = ({graph: {income, dividends, total, annotations}, addAnnotations, setChart, intl: {formatMessage}}) => {

  return (
    <Section header={formatMessage(messages.header)}>
      <HighchartsChart callback={setChart}>
        <Chart onAddSeries={() => addAnnotations(annotations)} />
        <Title>{ formatMessage(messages.chartHeader) }</Title>
        <XAxis>
          <XAxis.Title>{ formatMessage(messages.xAxisTitle) }</XAxis.Title>
        </XAxis>
        <YAxis>
          <YAxis.Title>{ formatMessage(messages.yAxisTitle) }</YAxis.Title>
          <LineSeries name={formatMessage(messages.seriesIncome)} data={income} />
          <LineSeries name={formatMessage(messages.seriesDividends)} data={dividends} />
          <LineSeries name={formatMessage(messages.seriesTotal)} data={total} />
        </YAxis>
        <Tooltip shared valueSuffix={formatMessage(messages.suffix)} />
        <Credits enabled={false} />
      </HighchartsChart>
    </Section>
);
};

SurplusGraphComponent.propTypes = {
  intl: intlShape.isRequired,
  graph: PropTypes.shape({}).isRequired,
  addAnnotations: PropTypes.func.isRequired,
  setChart: PropTypes.func.isRequired,
};

const mapStateToProps = ({graph}) => ({graph});

const mapDispatchToProps = () => ({
  addAnnotations: (annotations) => {
    // eslint-disable-next-line no-undef
    window.setTimeout(() => annotations.forEach(annotation => window.chart.addAnnotation(annotation)))
  }, // eslint-disable-next-line no-undef
  setChart: (chart) => window.chart = chart,
});

export const SurplusGraph = connect(mapStateToProps,
  mapDispatchToProps)(
  injectIntl(withHighcharts(SurplusGraphComponent, Highcharts)));

export default SurplusGraph;
