import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

const ROOT_URL = 'https://api.github.com/users';


export function fetchUsers() {
    return dispatch => {
        axios.get(ROOT_URL)
            .then(response => {
                dispatch({
                    type: FETCH_USERS,
                    payload: response
                });
            });
    }
}