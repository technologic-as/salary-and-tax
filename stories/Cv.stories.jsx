import { storiesOf } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import cvData from '../src/__data__/cv';
import { Cv, CvComponent } from '../src/www/components/Cv';
import configureStore from '../src/www/configureStore';


const store = configureStore({cv: {data: cvData, isLoaded: true, isFetching: false}});

storiesOf('CvComponent', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('with data', () => (<Cv />))
    .add('without data', () => (<CvComponent data={{}} isFetching={false} isLoaded={false} />
))
  .add('loading', () => (
    <CvComponent
      data={{}}
      isLoaded={false}
      isFetching
    />
));
