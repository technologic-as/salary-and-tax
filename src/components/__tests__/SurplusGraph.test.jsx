import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockComponent from 'identity-obj-proxy';
import React from 'react';
import { defaultSalaryParameters } from '../../calculations';
import { getChart } from '../../calculations/chart';
import { SurplusGraphComponent } from '../SurplusGraph';
import { mockIntl } from './__mock__/intl';

jest.mock('../Ui', () => mockComponent);

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

describe('SurplusGraph', () => {
  it('should render', () => {
    const tree = shallow(
      <SurplusGraphComponent
        graph={getChart({
          ...defaultSalaryParameters,
          graph: { increments: 100000 },
        })}
        setChart={() => mockComponent}
        addAnnotations={() => mockComponent}
        intl={mockIntl}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
