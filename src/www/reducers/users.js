import { RECEIVE_USERS, REQUEST_USERS } from '../actions';

const initialUsersState = {
    isFetching: false,
    list: [],
};
const users = (state = initialUsersState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                isFetching: false,
                list: action.list,
            });

        default:
            return state;
    }
};

export default users;
