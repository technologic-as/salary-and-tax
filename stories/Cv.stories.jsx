import { storiesOf } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import cvData from '../src/__data__/cv';
import { CvComponent } from '../src/www/components/Cv';
import configureStore from '../src/www/configureStore';


const store = configureStore();

storiesOf('CvComponent', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('with data', () => (
      <CvComponent
        data={cvData}
        isLoaded
        isFetching={false}
      />
))
    .add('without data', () => (
      <CvComponent
        data={{}}
        isFetching={false}
        isLoaded={false}
      />
))
  .add('loading', () => (
    <CvComponent
      data={{}}
      isFetching
      isLoaded={false}
    />
));
