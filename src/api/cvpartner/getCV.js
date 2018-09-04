import getRequest from './getRequest';

const getCV = async ({ userId, cvId }) => await getRequest(`/api/v3/cvs/${userId}/${cvId}`);

export default getCV;
