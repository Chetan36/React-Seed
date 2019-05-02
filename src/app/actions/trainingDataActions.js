import axios from 'axios';
import {FETCH_TRAINING_DATA, ADD_TRAINING_DATA} from './types';

const config = require('../services/config.json');
const trainingUrl = `${config.serverUrl}/training`;

export const fetchTrainingData = () => dispatch => {
    axios.get(`${trainingUrl}`)
    .then(response => {
        dispatch({
            type: FETCH_TRAINING_DATA,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}

export const addTrainingData = (data) => dispatch => {
    axios.post(`${trainingUrl}`, data)
    .then(response => {
        dispatch({
            type: ADD_TRAINING_DATA,
            payload: response.data.data
        })
    })
    .catch(error => {
        console.log("Error occured", error);
    });
}