import { REQUEST_CV } from '../../actions';
import cv from '../cv';

describe('cv reducer', function () {
    it('should have default values that match snapshot', function () {
        expect(cv()).toMatchSnapshot();
    });
    describe('action REQUEST_CV', function () {
        it('should set isFetching to false', function () {
            expect(cv(undefined, { type: 'IRRELEVANT' }).isFetching).toBeFalsy();
            expect(cv(undefined, { type: REQUEST_CV }).isFetching).toBeTruthy();
            expect(cv({ isFetching: true }, { type: REQUEST_CV }).isFetching).toBeTruthy();
            expect(cv({ isFetching: false }, { type: REQUEST_CV }).isFetching).toBeTruthy();
        });
        it('should only change isFetching', function () {
            const state = {
                some: 'state',
                which: 'should',
                be: 'kept',
            };
            expect(cv(state, { type: REQUEST_CV })).toEqual(expect.objectContaining(state));
        });
    });
});
