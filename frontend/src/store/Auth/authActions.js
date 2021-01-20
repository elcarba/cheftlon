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
        )

        dispatch({
            type: authActionTypes.REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: authActionTypes.LOGIN_SUCCESS,
            payload: data,
        })

        //Save user in localStorage
        localStorage.setItem('userInfo', JSON.stringify(data.data));

    } catch (error) {
        //TODO: HERE SHOW ERRORS FROM DATA OBJ including with message and return in payload
        dispatch({
            type: authActionTypes.REGISTER_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export function login(username, password) {

}

export const logout = () => {

}