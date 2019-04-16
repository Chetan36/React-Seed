import axios from 'axios';

const config = require('./config.json')
const inventoryUrl = `${config.inventoryUrl}/invmgmt`;

export function getAllProducts() {
    return axios.get(`${inventoryUrl}`)
}

export function getProductById(id) {
    return axios.get(`${inventoryUrl}/${id}`)
}

export function getProductByName(name) {
    return axios.get(`${inventoryUrl}/name/${name}`)
}

export function getProductsByStockBetween(minVal, maxVal) {
    return axios.get(`${inventoryUrl}/stockBetween/${minVal}/${maxVal}`)
}

export function getProductsOutOfStock() {
    return axios.get(`${inventoryUrl}/stockOut`)
}

export function addNewProduct(product) {
    return axios.post(`${inventoryUrl}`, product)
}
