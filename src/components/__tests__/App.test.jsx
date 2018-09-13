import mockComponent from 'identity-obj-proxy'
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';


jest.mock('../SalaryParameters', () => mockComponent);
jest.mock('../SalaryCalculations', () => mockComponent);
jest.mock('../TaxCalculations', () => mockComponent);

describe('App', () => {
    it('should render', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
