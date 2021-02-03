import chefActionTypes from './chefTypes';
import api from "../../utils/Interceptor";
import { handler } from '../../utils/ResponsesHandler'
import {getChefs} from "../ChefList/chefListActions";
import { success } from "../Alert/alertActions";

export const createChef = (chef) => async (dispatch) => {
    try {
        if(chef.hasOwnProperty("_id")){
            delete chef._id;
        }

        dispatch({
            type: chefActionTypes.CHEF_NEW_REQUEST,
        });

        const { data } = await api.post(
            '/chefs',
            chef
        );

        //Show Alert
        dispatch(success(data.message));

        dispatch({
            type: chefActionTypes.CHEF_NEW_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: chefActionTypes.CHEF_NEW_FAILURE,
            payload: handler.errorHandler(error),
        });
    }
}

export const updateChef = (chef) => async (dispatch) => {
    try {
        dispatch({
            type: chefActionTypes.CHEF_UPDATE_REQUEST,
        });

        const { data } = await api.put(
            `/chefs/${chef._id}`,
            chef
        );

        //Show Alert
        dispatch(success(data.message));

        dispatch({
            type: chefActionTypes.CHEF_UPDATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: chefActionTypes.CHEF_UPDATE_FAILURE,
            payload: handler.errorHandler(error),
        });
    }
}

export const deleteChef = (id) => async (dispatch) => {
    try {
        dispatch({
            type: chefActionTypes.CHEF_DELETE_REQUEST,
        });

        const { data } = await api.delete(
            `/chefs/${id}`
        );

        //Reload Chefs
        dispatch(getChefs());

        //Show Alert
        dispatch(success(data.message));

        dispatch({
            type: chefActionTypes.CHEF_DELETE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: chefActionTypes.CHEF_DELETE_FAILURE,
            payload: handler.errorHandler(error),
        });
    }
}

export const changeChefData = (chef) => {
    return {
        type: chefActionTypes.CHEF_CHANGE_DATA,
        payload: chef
    }
};

export const getChef = (chefId) => async (dispatch) => {
    try {
        dispatch({
            type: chefActionTypes.GET_CHEF_REQUEST,
        });

        const { data } = await api.get(`/chefs/${chefId}`);

        dispatch({
            type: chefActionTypes.GET_CHEF_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: chefActionTypes.GET_CHEF_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}