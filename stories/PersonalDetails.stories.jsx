import { storiesOf } from '@storybook/react';
import React from 'react';
import cvData from '../src/__data__/cv';
import { PersonalDetailsComponent } from '../src/www/components/PersonalDetails';


storiesOf('PersonalDetails', module)
  .add('with data', () => ( <PersonalDetailsComponent isLoaded data={cvData} isFetching={false} /> ));
