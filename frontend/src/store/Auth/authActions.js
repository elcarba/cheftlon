import authActionTypes from './authTypes';
import api from "../../utils/Interceptor";

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: authActionTypes.REGISTER_REQUEST,
        });

        const { data } = await api.post(
            '/auth/signup',
            { name, email, password }
        );

        dispatch({
            type: authActionTypes.REGISTER_SUCCESS,
            payload: data,
        });

        dispatch({
            type: authActionTypes.LOGIN_SUCCESS,
            payload: data,
        });

        //Save user in localStorage
        localStorage.setItem('userInfo', JSON.stringify(data.data));

    } catch (error) {
        dispatch({
            type: authActionTypes.REGISTER_FAILURE,
            payload: errorHandler(error),
        });
    }
}

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: authActionTypes.LOGIN_REQUEST,
        });

        const { data } = await api.post(
            '/auth/login',
            { email, password }
        );

        dispatch({
            type: authActionTypes.LOGIN_SUCCESS,
            payload: data,
        });

        //Save user in localStorage
        localStorage.setItem('userInfo', JSON.stringify(data.data));
    } catch (error) {
        dispatch({
            type: authActionTypes.LOGIN_FAILURE,
            payload: errorHandler(error)
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: authActionTypes.LOGOUT });
}

function errorHandler(error){
    return error.response && error.response.data.data
        ? retrieveErrors(error.response.data.data)
        : (
            error.response.data.message !== "" ?
                error.response.data.message : error.message
        );
}

function retrieveErrors(error){
    let str = "";
    for (const [key, value] of Object.entries(error)) {
        str += `${key}: ${value} \n`
    }

    return str;
}