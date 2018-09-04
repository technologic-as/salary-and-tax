import rp from 'request-promise';
import getRequest, { BASE_URL } from '../getRequest';

const mockData = [{ name: 'CV Partner', id: 'userId', default_cv_id: 'cvId' }];

jest.mock('request-promise');
rp.mockImplementation(() => Promise.resolve(mockData));

describe('getRequest', () => {
    it('should resolve to matching snapshot', async () => {
        await expect(getRequest('/api/call')).resolves.toMatchSnapshot();
    });
    it('should reject to matching snapshot', async () => {
        rp.mockImplementationOnce(() => Promise.reject({ error: 'error message' }));
        await expect(getRequest('/api/call')).rejects.toMatchSnapshot();
    });
    it('should add correct url', async () => {
        const apiUrl = '/api/url/to/be/appended';
        await getRequest(apiUrl);
        expect(rp).toHaveBeenCalledWith(expect.objectContaining({ url: expect.stringContaining(apiUrl) }));
        expect(rp).toHaveBeenCalledWith(expect.objectContaining({ url: expect.stringContaining(BASE_URL) }));
    });
    it('should add headers', async () => {
        await getRequest('/api/url/to/be/appended');
        expect(rp).toHaveBeenCalledWith(expect.objectContaining({
            headers: expect.objectContaining({ Authorization: expect.stringContaining('Token token=') }),
        }));
    });
});