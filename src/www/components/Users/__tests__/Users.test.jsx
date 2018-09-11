import mockComponent from 'identity-obj-proxy';
import React from 'react';
import renderer from 'react-test-renderer';
import { UsersComponent } from '../index';


const userList = [
    {
        name: 'CV',
        userId: 'partnerCv',
        cvId: 'idCv',
    },
    {
        name: 'Partner',
        userId: 'cvPartner',
        cvId: 'cvId',
    },
];

jest.mock('../../Ui', () => mockComponent);

const mockGetUsers = jest.fn();
const mockSelectUser = jest.fn();

describe('UsersComponent', () => {
    it('should render', () => {
        expect(renderer.create(<UsersComponent
          list={userList}
          getUsers={mockGetUsers}
          isFetching={false}
          isLoaded
          selectUser={mockSelectUser}
          selectedUser={{}}
        />).toJSON()).toMatchSnapshot();
    });
    it('should render loading', () => {
        expect(renderer.create(<UsersComponent
          list={[]}
          getUsers={mockGetUsers}
          isFetching
          isLoaded={false}
          selectUser={mockSelectUser}
          selectedUser={{}}
        />).toJSON()).toMatchSnapshot();
    });
    it('should render empty', () => {
        expect(renderer.create(<UsersComponent
          list={[]}
          getUsers={mockGetUsers}
          isFetching={false}
          isLoaded
          selectUser={mockSelectUser}
          selectedUser={{}}
        />).toJSON()).toMatchSnapshot();
    });
    it('should dispatch when mounted', () => {
        renderer.create(<UsersComponent
          list={userList}
          getUsers={mockGetUsers}
          isFetching={false}
          isLoaded
          selectUser={mockSelectUser}
          selectedUser={{}}
        />);
        expect(mockGetUsers).toHaveBeenCalled();
    });
});

export default userList;
