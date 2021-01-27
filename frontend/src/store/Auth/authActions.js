import authActionTypes from './authTypes';
import api from "../../utils/Interceptor";
import { handler } from '../../utils/ResponsesHandler'
import {success} from "../Alert/alertActions";
import userActionTypes from "../User/userTypes";

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

        //Show Alert
        dispatch(success(data.message));

        //Save user in localStorage
        localStorage.setItem('userInfo', JSON.stringify(data.data));

    } catch (error) {
        dispatch({
            type: authActionTypes.REGISTER_FAILURE,
            payload: handler.errorHandler(error),
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
            payload: handler.errorHandler(error)
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: authActionTypes.LOGOUT });
}

export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch({
            type: authActionTypes.GET_PROFILE_REQUEST,
        });

        const { data } = await api.get(`/users/profile`);

        dispatch({
            type: authActionTypes.GET_PROFILE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: authActionTypes.GET_PROFILE_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateUserProfile = (user) => async (dispatch) => {
    try {
        dispatch({
            type: authActionTypes.PROFILE_UPDATE_REQUEST,
        });

        const { data } = await api.put(
            `/users/profile`,
            user
        );

        //Refresh LS
        const oldInfo = JSON.parse(localStorage.getItem("userInfo"));
        //Remove old info and add new
        localStorage.removeItem("userInfo");
        localStorage.setItem("userInfo", JSON.stringify({
            ...oldInfo,
            name: user.name,
        }));

        //Reload page to see LS updated
        window.location.reload();

        //Show Alert
        dispatch(success(data.message));

        dispatch({
            type: authActionTypes.PROFILE_UPDATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: authActionTypes.PROFILE_UPDATE_FAILURE,
            payload: handler.errorHandler(error),
        });
    }
}