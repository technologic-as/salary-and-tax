import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputWithLabel, Section } from '../src/components/Ui';


storiesOf('Ui', module)
  .add('Section', () => <Section header="The title">child</Section>)
  .add('InputWithLabel', () => <InputWithLabel value={123} fieldName="in" labelText="Value" changedValue={action} />);
