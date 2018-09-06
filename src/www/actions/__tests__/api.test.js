import { requestCv, requestUsers } from '../api';

describe('requestUsers', () => {
    it('should return action matching snapshot', function () {
        expect(requestUsers()).toMatchSnapshot();
    });
});

describe('requestCv', () => {
    it('should return action matching snapshot', function () {
        expect(requestCv('idUser', 'idCv')).toMatchSnapshot();
    });
});
