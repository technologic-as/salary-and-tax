import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockComponent from 'identity-obj-proxy';
import React from 'react';
import './__mock__/initMocks';
import { defaultSalaryParameters } from '../calculations';
import { getChart } from '../calculations/chart';
import renderer from 'react-test-renderer';
import { SurplusGraphComponent } from './SurplusGraph';

jest.mock('./Ui', () => mockComponent);
jest.mock('highcharts', () => ({}));

jest.mock('react-jsx-highcharts', () => {
  const axisMock = ({ children }: { children: unknown }) => <>{children}</>;
  axisMock.Title = 'Title';
  return {
    XAxis: axisMock,
    YAxis: axisMock,
    HighchartsProvider: 'HighchartsProvider',
    HighchartsChart: 'HighchartsChart',
    Chart: 'Chart',
    Credits: 'Credits',
    Title: 'Title',
    Legend: 'Legend',
    ScatterSeries: 'ScatterSeries',
    LineSeries: 'LineSeries',
    Tooltip: 'Tooltip',
  };
});

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

describe('SurplusGraph', () => {
  it('should render', () => {
    const { sevenG, maxTotal, grossIncome, netIncome, surplus, dividends, total } = getChart({
      ...defaultSalaryParameters,
      graph: { increments: 100000 },
    });
    const tree = renderer
      .create(
        <SurplusGraphComponent
          sevenG={sevenG}
          maxTotal={maxTotal}
          grossIncome={grossIncome}
          netIncome={netIncome}
          surplus={surplus}
          dividends={dividends}
          total={total}
          clickDividends={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
