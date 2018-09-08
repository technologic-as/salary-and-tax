import { RECEIVE_CV, REQUEST_CV } from '../actions';


const initialCvState = {
    isFetching: false,
    isLoaded: false,
    data: {name: ''},
};
const cv = (state = initialCvState, action = {}) => {
    switch (action.type) {
        case REQUEST_CV:
            return Object.assign({}, state, {
                isFetching: true,
                isLoaded: false,
            });
        case RECEIVE_CV:
            return Object.assign({}, state, {
                isFetching: false,
                isLoaded: true,
                data: action.cv,
            });
        default:
            return state;
    }
};

export default cv;
