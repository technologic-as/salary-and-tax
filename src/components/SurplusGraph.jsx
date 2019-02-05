import { forbidExtraProps } from 'airbnb-prop-types';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import {
  Chart,
  Credits,
  HighchartsChart,
  Legend,
  LineSeries,
  ScatterSeries,
  Title,
  Tooltip,
  withHighcharts,
  XAxis,
  YAxis,
} from 'react-jsx-highcharts';
import { connect } from 'react-redux';
import { Section } from './Ui';

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
  seriesIncomeGross: {
    id: 'surplus.series.income.gross',
    defaultMessage: 'Gross income',
  },
  seriesIncomeNet: {
    id: 'surplus.series.income.net',
    defaultMessage: 'Net income',
  },
  seriesSurplus: {
    id: 'surplus.series.surplus',
    defaultMessage: 'Surplus',
  },
  seriesGrossSevenG: {
    id: 'surplus.series.gross.seven.g',
    defaultMessage: '7.1 Gross income',
  },
  seriesMaxTotal: {
    id: 'surplus.series.max.total',
    defaultMessage: 'Max total',
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

export const SurplusGraphComponent = ({
  sevenG,
  maxTotal,
  grossIncome,
  netIncome,
  surplus,
  dividends,
  total,
  intl: { formatMessage },
}) => {
  return (
    <Section header={formatMessage(messages.header)}>
      <HighchartsChart>
        <Chart />
        <Title>{formatMessage(messages.chartHeader)}</Title>
        <Legend />
        <XAxis>
          <XAxis.Title>{formatMessage(messages.xAxisTitle)}</XAxis.Title>
        </XAxis>
        <YAxis>
          <ScatterSeries
            name={formatMessage(messages.seriesGrossSevenG)}
            data={sevenG}
          />
          <ScatterSeries
            name={formatMessage(messages.seriesMaxTotal)}
            data={maxTotal}
          />
          <YAxis.Title>{formatMessage(messages.yAxisTitle)}</YAxis.Title>
          <LineSeries
            name={formatMessage(messages.seriesIncomeGross)}
            data={grossIncome}
          />
          <LineSeries
            name={formatMessage(messages.seriesIncomeNet)}
            data={netIncome}
            visible={false}
          />
          <LineSeries
            name={formatMessage(messages.seriesSurplus)}
            data={surplus}
            visible={false}
          />
          <LineSeries
            name={formatMessage(messages.seriesDividends)}
            data={dividends}
          />
          <LineSeries name={formatMessage(messages.seriesTotal)} data={total} />
        </YAxis>
        <Tooltip shared valueSuffix={formatMessage(messages.suffix)} />
        <Credits enabled={false} />
      </HighchartsChart>
    </Section>
  );
};

SurplusGraphComponent.propTypes = forbidExtraProps({
  intl: intlShape.isRequired,
  sevenG: PropTypes.arrayOf(PropTypes.array).isRequired,
  maxTotal: PropTypes.arrayOf(PropTypes.array).isRequired,
  grossIncome: PropTypes.arrayOf(PropTypes.array).isRequired,
  netIncome: PropTypes.arrayOf(PropTypes.array).isRequired,
  surplus: PropTypes.arrayOf(PropTypes.array).isRequired,
  dividends: PropTypes.arrayOf(PropTypes.array).isRequired,
  total: PropTypes.arrayOf(PropTypes.array).isRequired,
  dispatch: PropTypes.func,
});

const mapStateToProps = ({
  graph: {
    sevenG,
    maxTotal,
    grossIncome,
    netIncome,
    surplus,
    dividends,
    total,
  },
}) => ({ grossIncome, netIncome, surplus, dividends, total, sevenG, maxTotal });

export const SurplusGraph = connect(mapStateToProps)(
  injectIntl(withHighcharts(SurplusGraphComponent, Highcharts))
);

export default SurplusGraph;
