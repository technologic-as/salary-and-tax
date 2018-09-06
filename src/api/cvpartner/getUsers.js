import getRequest from './getRequest';

const getUsers = () => {
    return getRequest(`/api/v1/users?offset=0`)
        .then(users => users.map(({ id, default_cv_id, name }) => ({
            userId: id,
            cvId: default_cv_id,
            name,
        })));
};

export default getUsers;
