import axios from './axios.customize'

const createUserApi = (email, name, password) => {
    const URL_API = '/v1/api/register'
    const data = {
       name, email, password
    }
    // console.log(">>> check data: ", data) 
    return axios.post(URL_API, data)
}

const loginUserApi = (email, password) => {
    const URL_API = '/v1/api/login'
    const data = {
       email, password
    }
    // console.log(">>> check data: ", data) 
    return axios.post(URL_API, data)
}

export {
    createUserApi,
    loginUserApi
}