import axios from 'axios';
import {ADD_USER, FETCH_USERS, FETCH_USER_BY_ID, UPDATE_USER} from '../actions/types';

const config = require('../services/config.json');
const userUrl = `${config.serverUrl}/user`;

export const fetchAllUsers = () => dispatch => {
    axios.get(`${userUrl}`)
    .then(response => {
        dispatch({
            type: FETCH_USERS,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const fetchUserById = (id) => dispatch => {
    axios.get(`${userUrl}/${id}`)
    .then(response => {
        dispatch({
            type: FETCH_USER_BY_ID,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const addNewUser = (user) => dispatch => {
    axios.post(`${userUrl}`, user)
    .then(response => {
        dispatch({
            type: ADD_USER,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const fetchUserById = (id) => dispatch => {
    axios.get(`${userUrl}/${id}`)
    .then(response => {
        dispatch({
            type: FETCH_USER_BY_ID,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}
