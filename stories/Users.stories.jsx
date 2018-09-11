import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { UsersComponent } from '../src/www/components/Users';
import userList from '../src/www/components/Users/__tests__/Users.test';


const noop = () => {
};

storiesOf('UsersComponent', module)
  .add('user list with selected user', () => (
    <UsersComponent
      selectedUser={userList[0]}
      list={userList}
      selectUser={noop}
      getUsers={noop}
      isLoaded
      isFetching={false}
    />
))
  .add('user list without selected user', () => (
    <UsersComponent
      selectedUser={{}}
      list={userList}
      selectUser={noop}
      getUsers={noop}
      isLoaded
      isFetching={false}
    />
))
  .add('without users', () => (
    <UsersComponent
      selectedUser={{}}
      list={[]}
      selectUser={noop}
      getUsers={noop}
      isLoaded
      isFetching={false}
    />
))
  .add('fetching users', () => (
    <UsersComponent
      selectedUser={{}}
      list={[]}
      selectUser={noop}
      getUsers={noop}
      isLoaded={false}
      isFetching
    />
))
  .add('with click', () => (
    <UsersComponent
      selectedUser={{}}
      list={userList}
      selectUser={action('clicked')}
      getUsers={noop}
      isFetching={false}
      isLoaded
    />
));
