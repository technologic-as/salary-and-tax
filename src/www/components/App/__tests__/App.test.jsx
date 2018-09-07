import mockComponent from 'identity-obj-proxy'
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../index';

jest.mock('../../Users', () => mockComponent);

describe('App', () => {
    it('should render', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
