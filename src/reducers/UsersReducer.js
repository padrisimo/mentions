import { FETCH_USERS } from '../actions';

export default function reducer(state = {
    users: {},
    isfetched: false
}, action) {
    switch (action.type) {
        case FETCH_USERS:
            return { users: action.payload.data, isfetched: true }
        default:
            return state;
    }
};
