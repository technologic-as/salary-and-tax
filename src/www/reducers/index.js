import { combineReducers } from 'redux';
import users from './users';
import cv from './cv';

const rootReducer = combineReducers({
    users,
    cv,
});

export default rootReducer;
