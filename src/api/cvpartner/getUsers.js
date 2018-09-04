import debug from 'debug';
import getRequest from './getRequest';

const logger = debug('technologic.as:getUsers');

const getUsers = () => {
    return getRequest(`/api/v1/users?offset=0`)
        .then(users => users.map(({ id, default_cv_id, name }) => ({ userId: id, cvId: default_cv_id, name })))
        .catch(err => logger('failed to get users', err));
};

export default getUsers;