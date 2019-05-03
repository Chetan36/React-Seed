import {ADD_USER, FETCH_USERS, FETCH_USER_BY_ID, UPDATE_USER} from '../actions/types';

const initialState = {
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return {

            }
        case FETCH_USERS:
            return {

            }
        case FETCH_USER_BY_ID:
            return {

            }
        case UPDATE_USER:
            return {

            }
        default:
            return state;
    }
}
