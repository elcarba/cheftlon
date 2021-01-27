import axios from 'axios';
import { API_URL } from '../config/api';
import store from '../store/index';
import { logout } from "../store/Auth/authActions";
import { error as showError } from "../store/Alert/alertActions";

const config = {
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

/**
 Create instance axios with all the config
 */
const api = axios.create(config);

/**
 intercept any request to api and ADD token to it.
 **/
api.interceptors.request.use(function (config) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo)
        config.headers.Authorization = `Bearer ${userInfo.token}`;

    return config;
}, function (error) {
    return Promise.reject(error);
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
 **/

api.interceptors.response.use(
    res => res,
    error => {
        if(error.response.config.url !== "/auth/signup" && error.response.config.url !== "/auth/login"){
            if(error.response && error.response.hasOwnProperty("data") &&
                error.response.data.hasOwnProperty("message")){
                store.dispatch(showError(error.response.data.message));
            }
        }

        if (error.response.status === 401) {
            console.log("Token expired or Invalid token.")
            store.dispatch(logout());
        }

        return Promise.reject(error);
    }
);

export default api;