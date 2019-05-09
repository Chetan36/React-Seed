import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import userReducer from './userReducer';

export default combineReducers({
    itemState: itemsReducer,
    userState: userReducer
})
