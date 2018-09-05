import React from 'react';
import renderer from 'react-test-renderer';
import App from '../index';

describe('App', () => {
    it('should render', () => {
        const tree = renderer.create(<App name="world" />)
            .toJSON();
        expect(tree)
            .toMatchSnapshot();
    });
});
