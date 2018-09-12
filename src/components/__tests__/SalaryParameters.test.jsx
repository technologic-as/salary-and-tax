import mockComponent from 'identity-obj-proxy'
import React from 'react';
import renderer from 'react-test-renderer';
import { SalaryParametersComponent } from '../SalaryParameters';


const handleSubmit = fn => fn();
const submitForm = jest.fn();

jest.mock('../Ui', () => mockComponent);

describe('SalaryParametersComponent', () => {
  it('should render', () => {
    const tree = renderer.create(<SalaryParametersComponent
      handleSubmit={handleSubmit}
      submitForm={submitForm}
      submitting={false}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
