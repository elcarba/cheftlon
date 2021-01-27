import userListTypes from './userListTypes';
import api from "../../utils/Interceptor";

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: userListTypes.GET_USERS_REQUEST,
        });

        const { data } = await api.get(`/users`);

        dispatch({
            type: userListTypes.GET_USERS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: userListTypes.GET_USERS_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}