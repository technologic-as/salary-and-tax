import { RECEIVE_USERS, REQUEST_USERS } from '../../actions';
import users from '../users';

describe('users reducer', function () {
    it('should have default values that match snapshot', function () {
        expect(users()).toMatchSnapshot();
    });
    describe('action REQUEST_USERS', function () {
        it('should set isFetching to false', function () {
            expect(users(undefined, { type: 'IRRELEVANT' }).isFetching).toBeFalsy();
            expect(users(undefined, { type: REQUEST_USERS }).isFetching).toBeTruthy();
            expect(users({ isFetching: true }, { type: REQUEST_USERS }).isFetching).toBeTruthy();
            expect(users({ isFetching: false }, { type: REQUEST_USERS }).isFetching).toBeTruthy();
        });
        it('should only change isFetching', function () {
            const state = {
                some: 'state',
                which: 'should',
                be: 'kept',
            };
            expect(users(state, { type: REQUEST_USERS })).toEqual(expect.objectContaining(state));
        });
    });
    describe('action RECEIVE_USERS', function () {
        it('should set isFetching to false', function () {
            expect(users(undefined, { type: 'IRRELEVANT' }).isFetching).toBeFalsy();
            expect(users(undefined, { type: RECEIVE_USERS }).isFetching).toBeFalsy();
            expect(users({ isFetching: true }, { type: RECEIVE_USERS }).isFetching).toBeFalsy();
            expect(users({ isFetching: false }, { type: RECEIVE_USERS }).isFetching).toBeFalsy();
        });
        it('should add list of users', function () {
            expect(users(undefined,
                {
                    type: RECEIVE_USERS,
                    list: [
                        { user: '1' },
                        { user: '2' },
                    ],
                })).toMatchSnapshot();
        });
        it('should only change isFetching', function () {
            const state = {
                some: 'state',
                which: 'should',
                be: 'kept',
            };
            expect(users(state, { type: RECEIVE_USERS })).toEqual(expect.objectContaining(state));
        });
    });
});
