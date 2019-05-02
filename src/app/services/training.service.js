import axios from 'axios';

const config = require('./config.json')
const trainingUrl = `${config.serverUrl}/training`;

export function Service_getAllTrainingData() {
    return axios.get(`${trainingUrl}`);
}

export function Service_getTrainingDataById(id) {
    return axios.get(`${trainingUrl}/${id}`);
}

export function Service_addTrainingData(data) {
    return axios.post(`${trainingUrl}`, data);
}

export function Service_updateTrainingData(data, id) {
    return axios.put(`${trainingUrl}/${id}`, data);
}
