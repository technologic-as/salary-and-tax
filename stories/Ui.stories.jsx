import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Born, Dropdown, Email, Loading, Nationality, Phone, Residency, Section } from '../src/www/components/Ui';


storiesOf('Ui', module)
  .add('Phone', () => <Phone value={48043932} />)
  .add('Email', () => <Email value="email@email.com" />)
  .add('Nationality', () => <Nationality value="Norwegian" />)
  .add('Born', () => <Born value={1985} />)
  .add('Residency', () => <Residency value="Oslo" />)
  .add('Loading', () => <Loading />)
  .add('Dropdown', () => ( 
    <Dropdown
      onChange={action('clicked')}
      options={[
        {name: 'Some option'},
        {name: 'Selected option'},
      ]}
      selectedOption={{name: 'Selected option'}}
    />
 ))
  .add('Section', () => <Section header="The title">child</Section>);
