import fetch from 'cross-fetch';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';
export const REQUEST_CV = 'REQUEST_CV';

export const requestUsers = () => ({
    type: REQUEST_USERS,
});

export const receiveUsers = (list) => ({
    type: RECEIVE_USERS, list,
});

export const requestCv = (userId, cvId) => ({
    type: REQUEST_CV,
    userId,
    cvId,
});

export const fetchUsers = () => {
    return dispatch => {
        dispatch(requestUsers());
        return fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(json => dispatch(receiveUsers(json)))
    }
};
