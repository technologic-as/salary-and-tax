import Highcharts from 'highcharts';
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Chart,
  Credits,
  HighchartsChart,
  HighchartsProvider,
  Legend,
  LineSeries,
  ScatterSeries,
  Title,
  Tooltip,
  XAxis,
  YAxis,
} from 'react-jsx-highcharts';
import { connect } from 'react-redux';
import { dividendsClick } from '../actions';
import { Section } from './Ui';
import { State } from '../reducers';
import { ChartState } from '../calculations/chart';
import { Dispatch } from 'redux';

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

type ActionProps = {
  clickDividends: ({ point }: { point: { x: number } }) => void;
};

export const SurplusGraphComponent = ({
  sevenG,
  maxTotal,
  grossIncome,
  netIncome,
  surplus,
  dividends,
  total,
  clickDividends,
}: ChartState & ActionProps) => {
  const { formatMessage } = useIntl();
  return (
    <Section header={formatMessage(messages.header)}>
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart>
          <Chart />
          <Title>{formatMessage(messages.chartHeader)}</Title>
          <Legend />
          <XAxis>
            <XAxis.Title>{formatMessage(messages.xAxisTitle)}</XAxis.Title>
          </XAxis>
          <YAxis>
            <ScatterSeries name={formatMessage(messages.seriesGrossSevenG)} data={sevenG} />
            <ScatterSeries name={formatMessage(messages.seriesMaxTotal)} data={maxTotal} />
            <YAxis.Title>{formatMessage(messages.yAxisTitle)}</YAxis.Title>
            <LineSeries name={formatMessage(messages.seriesIncomeGross)} data={grossIncome} />
            <LineSeries name={formatMessage(messages.seriesIncomeNet)} data={netIncome} visible={false} />
            <LineSeries name={formatMessage(messages.seriesSurplus)} data={surplus} visible={false} />
            <LineSeries
              name={formatMessage(messages.seriesDividends)}
              data={dividends}
              onClick={(e) => clickDividends(e)}
            />
            <LineSeries name={formatMessage(messages.seriesTotal)} data={total} />
          </YAxis>
          <Tooltip shared valueSuffix={formatMessage(messages.suffix)} />
          <Credits enabled={false} />
        </HighchartsChart>
      </HighchartsProvider>
    </Section>
  );
};

const mapStateToProps = ({
  graph: { sevenG, maxTotal, grossIncome, netIncome, surplus, dividends, total },
}: State) => ({
  grossIncome,
  netIncome,
  surplus,
  dividends,
  total,
  sevenG,
  maxTotal,
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  clickDividends: ({ point }) => dividendsClick(point)(dispatch),
});

export const SurplusGraph = connect(mapStateToProps, mapDispatchToProps)(SurplusGraphComponent);

export default SurplusGraph;
