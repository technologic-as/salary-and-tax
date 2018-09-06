import React from 'react';
import renderer from 'react-test-renderer';
import { UsersComponent } from '../index';

const list = [
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

const mockGetUsers = jest.fn();

describe('UsersComponent', () => {
    it('should render', () => {
        expect(renderer.create(<UsersComponent list={list} getUsers={mockGetUsers} isFetching={false} />)
            .toJSON()).toMatchSnapshot();
    });
    it('should render loading', () => {
        expect(renderer.create(<UsersComponent list={[]} getUsers={mockGetUsers} isFetching />).toJSON())
            .toMatchSnapshot();
    });
    it('should render empty', () => {
        expect(renderer.create(<UsersComponent list={[]} getUsers={mockGetUsers} isFetching={false} />).toJSON())
            .toMatchSnapshot();
    });
    it('should dispatch when mounted', () => {
        renderer.create(<UsersComponent list={list} getUsers={mockGetUsers} isFetching={false} />);
        expect(mockGetUsers).toHaveBeenCalled();
    });
});
