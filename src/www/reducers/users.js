import { REQUEST_USERS } from '../actions';

const initialUsersState = {
    isFetching: false,
    name: 'Partner',
    users: [],
};
const users = (state = initialUsersState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        default:
            return state;
    }
};

export default users;
