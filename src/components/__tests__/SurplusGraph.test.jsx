import mockComponent from 'identity-obj-proxy'
import React from 'react';
import renderer from 'react-test-renderer';
import getChart from '../../calculations/chart';
import { SurplusGraphComponent } from '../SurplusGraph';
import { mockIntl } from './__mock__/intl';


jest.mock('../Ui', () => mockComponent);
jest.mock('react-highcharts', () => "ReactHighcharts");


describe('SurplusGraph', () => {
  it('should render', () => {
    const tree = renderer.create(<SurplusGraphComponent
      graph={getChart()}
      intl={mockIntl}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
