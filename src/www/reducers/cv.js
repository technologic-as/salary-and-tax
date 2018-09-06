import { REQUEST_CV } from '../actions';

const initialCvState = {
    isFetching: false,
    name: 'Partner',
    id: ''
};
const cv = (state = initialCvState, action) => {
    switch (action.type) {
        case REQUEST_CV:
            return Object.assign({}, state, {
                isFetching: true,
            });
        default:
            return state;
    }
};

export default cv;
