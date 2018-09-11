import mockComponent from 'identity-obj-proxy';
import React from 'react';
import renderer from 'react-test-renderer';
import testData from '../../../../__data__/cv.json'
import { PersonalDetailsComponent } from '../index';


jest.mock('../../Ui', () => mockComponent);
jest.mock('react-gravatar', () => 'Gravatar');

describe('PersonalDetailsComponent', () => {
  it('should render', () => {
    const tree = renderer.create(<PersonalDetailsComponent data={testData} isLoaded isFetching={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should not display when loading', () => {
    const tree = renderer.create(<PersonalDetailsComponent data={testData} isFetching isLoaded={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
