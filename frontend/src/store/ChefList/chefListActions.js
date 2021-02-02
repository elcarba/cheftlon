import chefListTypes from './chefListTypes';
import api from "../../utils/Interceptor";

export const getChefs = () => async (dispatch) => {
    try {
        dispatch({
            type: chefListTypes.GET_CHEFS_REQUEST,
        });

        const { data } = await api.get(`/chefs`);

        dispatch({
            type: chefListTypes.GET_CHEFS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: chefListTypes.GET_CHEFS_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}