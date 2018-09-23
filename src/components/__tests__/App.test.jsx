import mockComponent from 'identity-obj-proxy'
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';


jest.mock('../SalaryParameters', () => mockComponent);
jest.mock('../SalaryCalculations', () => mockComponent);
jest.mock('../TaxCalculations', () => mockComponent);
jest.mock('../Summary', () => mockComponent);
jest.mock('../SurplusGraph', () => mockComponent);
jest.mock('../Ui', () => mockComponent);

describe('App', () => {
    it('should render', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
