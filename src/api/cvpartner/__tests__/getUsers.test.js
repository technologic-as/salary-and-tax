import getRequest from '../getRequest';
import getUsers from '../getUsers';

const mockFirstUser = { name: 'CV Partner', id: 'userId', default_cv_id: 'cvId' };
const mockSecondUser = { name: 'Partner CV', id: 'idUser', default_cv_id: 'idCv' };

getRequest.mockImplementation(() => Promise.resolve([
    mockFirstUser,
    mockSecondUser,
]));

jest.mock('../getRequest');

describe('getUsers', () => {
    it('should get users', async () => {
        await expect(getUsers()).resolves.toMatchSnapshot();
    });
    it('should use correct url', async () => {
        await getUsers();
        expect(getRequest).toHaveBeenCalledWith('/api/v1/users?offset=0');
    });
    it('should map default_cv_id to cv_id and id to userId', async () => {
        await expect(getUsers()).resolves.toEqual(expect.arrayContaining([
            expect.objectContaining({ cvId: mockFirstUser.default_cv_id, userId: 'userId' }),
            expect.objectContaining({ cvId: mockSecondUser.default_cv_id, userId: 'idUser' }),
        ]));
    });
});
