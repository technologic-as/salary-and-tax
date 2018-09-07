import React from 'react';
import renderer from 'react-test-renderer';
import testData from '../../../../__data__/cv.json'
import { CvComponent } from '../index';

describe('CvComponent', () => {
    it('should render', () => {
        const tree = renderer.create(<CvComponent data={testData} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
