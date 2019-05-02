import {FETCH_TRAINING_DATA, ADD_TRAINING_DATA} from '../actions/types';

const initialState = {
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_TRAINING_DATA:
            return {
                ...state,
                trainingItems: action.payload
            }
        case ADD_TRAINING_DATA:
            return {
                ...state,
                trainingItem: action.payload
            }
        default:
            return state;
    }
}