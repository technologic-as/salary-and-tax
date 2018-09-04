import getCV from '../getCV';
import getRequest from '../getRequest';

const userId = 'idUser';
const cvId = 'idCv';
const user = { userId: userId, cvId: cvId };

getRequest.mockImplementation(() => Promise.resolve({ dummy: 'cv' }));

jest.mock('../getRequest');

describe('getCV', () => {
    it('should get users', async () => {
        await expect(getCV(user)).resolves.toMatchSnapshot();
    });
    it('should use correct url', async () => {
        await getCV(user);
        expect(getRequest).toHaveBeenCalledWith(`/api/v3/cvs/${userId}/${cvId}`);
    });
});
