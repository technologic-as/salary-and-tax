import mockComponent from 'identity-obj-proxy';
import React from 'react';
import renderer from 'react-test-renderer';
import './__mock__/initMocks';
import { SalaryParametersComponent } from './SalaryParameters';

const handleSubmit = () => jest.fn();

jest.mock('./Ui', () => mockComponent);

describe('SalaryParametersComponent', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <SalaryParametersComponent
          handleSubmit={handleSubmit}
          submitting={false}
          locales={[
            { value: 'en', label: 'English' },
            { value: 'nb', label: 'Norsk' },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
