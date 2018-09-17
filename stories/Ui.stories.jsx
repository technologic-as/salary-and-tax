import { storiesOf } from '@storybook/react';
import React from 'react';
import withReduxForm from 'redux-form-storybook';
import { Checkbox, InputWithLabel, Section } from '../src/components/Ui';


storiesOf('Ui', module)
  .addDecorator(withReduxForm)
  .add('Section', () => <Section header="The title">child</Section>)
  .add('InputWithLabel', () => <InputWithLabel value={123} name="in" label="Value" />)
  .add('Checkbox', () => <Checkbox name="ch" label="Value" />);
