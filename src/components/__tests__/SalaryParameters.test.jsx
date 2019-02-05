import mockComponent from 'identity-obj-proxy';
import React from 'react';
import renderer from 'react-test-renderer';
import { SalaryParametersComponent } from '../SalaryParameters';
import { mockIntl } from './__mock__/intl';

const handleSubmit = fn => fn();
const submitForm = jest.fn();

jest.mock('../Ui', () => mockComponent);
jest.mock('@material-ui/core/Table', () => 'Table');
jest.mock('@material-ui/core/TableBody', () => 'TableBody');
jest.mock('@material-ui/core/FormGroup', () => 'FormGroup');
jest.mock('@material-ui/core/FormControlLabel', () => 'FormControlLabel');
jest.mock('@material-ui/core/Radio', () => 'Radio');

describe('SalaryParametersComponent', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <SalaryParametersComponent
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          submitting={false}
          intl={mockIntl}
          onSubmit={() => {}}
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
