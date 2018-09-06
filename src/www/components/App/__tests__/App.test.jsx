import React from 'react';
import renderer from 'react-test-renderer';
import { AppComponent } from '../index';

jest.mock('../../Users', () => 'Users');

describe('AppComponent', () => {
    it('should render', () => {
        const tree = renderer.create(<AppComponent name="world" />)
            .toJSON();
        expect(tree)
            .toMatchSnapshot();
    });
});
