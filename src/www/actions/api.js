import fetch from 'cross-fetch';


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';
export const USER_IS_SELECTED = 'USER_IS_SELECTED';

export const REQUEST_CV = 'REQUEST_CV';
export const RECEIVE_CV = 'RECEIVE_CV';

export const FORM_CHANGE = 'FORM_CHANGE';

export const requestUsers = () => ({
    type: REQUEST_USERS,
});

export const receiveUsers = (list) => ({
    type: RECEIVE_USERS,
    list,
});

export const requestCv = (userId, cvId, name) => ({
    type: REQUEST_CV,
    userId,
    cvId,
    name,
});

export const receiveCv = (cv) => ({
    type: RECEIVE_CV,
    cv,
});

export const formChange = (values) => ({
  type: FORM_CHANGE,
  ...values,
});

export const fetchUsers = () => {
    return dispatch => {
        dispatch(requestUsers());
        return fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(list => dispatch(receiveUsers(list)))
            .then((users) => {
                if (users.list.length === 1) { dispatch(selectUser(users.list[0])) }
                return users;
            });
    }
};

export const selectUser = ({userId, cvId, name}) => {
    return dispatch => {
        dispatch(requestCv(userId, cvId, name));
        return fetch(`http://localhost:3000/api/cv/${userId}/${cvId}`)
            .then(response => response.json())
            .then(json => dispatch(receiveCv(json)))
    }
};

export const inputHasChanged = (values) => {
  return dispatch => {
    dispatch(formChange(values));
  }
};
