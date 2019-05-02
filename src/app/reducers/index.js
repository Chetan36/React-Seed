import { combineReducers } from 'redux';
import trainingDataReducer from './trainingDataReducer';

export default combineReducers({
    training: trainingDataReducer
})
