import axios from 'axios';
import { API_URL } from '../config/api';
const userInfo = JSON.parse(localStorage.getItem('userInfo'));

const config = {
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

if(userInfo){
    config['Authorization'] = 'Bearer '+userInfo.token;
}

/**
 Create instance axios with all the config
 */
const api = axios.create(config);

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
 **/

api.interceptors.response.use(
    res => res,
    err => {
        if (err.response.status === 401) {
            console.log("Token expired or Invalid token.")
            // store.dispatch({ type: LOGOUT });
        }
        return Promise.reject(err);
    }
);

export default api;