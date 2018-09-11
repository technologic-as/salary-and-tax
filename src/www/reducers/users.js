import { RECEIVE_USERS, REQUEST_USERS } from '../actions';


const getSelectedUser = (list) => {
  return list && list.length === 1 ? {...list[0]} : {};
};

const initialList = [];

const initialUsersState = {
  isFetching: false,
  isLoaded: false,
  list: initialList,
  selectedUser: getSelectedUser(initialList),
};

const users = (state = initialUsersState, action = {}) => {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        isLoaded: false,
      });
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        list: action.list,
        selectedUser: getSelectedUser(action.list),
      });
    default:
      return state;
  }
};

export default users;
