import mockComponent from 'identity-obj-proxy';
import React from 'react';
import renderer from 'react-test-renderer';
import testData from '../../../../__data__/cv.json'
import { CvComponent } from '../index';


jest.mock('../../PersonalDetails', () => mockComponent);
jest.mock('../../Ui', () => mockComponent);

describe('CvComponent', () => {
    it('should render', () => {
        const tree = renderer.create(<CvComponent data={testData} isFetching={false} isLoaded />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should not display when loading', () => {
        const tree = renderer.create(<CvComponent data={{}} isFetching isLoaded={false} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
