import getCV from '../getCV';
import getRequest from '../getRequest';
import testData from './__data__/cv.json'

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
    it('should reject errors', async () => {
        getRequest.mockImplementationOnce(() => Promise.reject({ error: 'error' }));
        await expect(getCV(user)).rejects.toMatchSnapshot();
    });
    it('should map according to snapshot', async () => {
        getRequest.mockImplementationOnce(() => Promise.resolve(testData));
        await expect(getCV(user)).resolves.toMatchSnapshot();
    });
});
