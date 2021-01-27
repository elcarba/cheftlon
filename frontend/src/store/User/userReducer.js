import userActionTypes from './userTypes';

const initialState = {
    user: {
        _id: '',
        name: '',
        email: '',
        password: '',
        isAdmin: false
    },
    isLoading: false,
    error: null,
    retrievingUserError: null,
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userActionTypes.GET_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                retrievingUserError: null
            };

        case userActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    _id: action.payload.data._id,
                    name: action.payload.data.name,
                    email: action.payload.data.email,
                    password: action.payload.data.hasOwnProperty("password") ?
                        action.payload.data.password : '',
                    isAdmin: action.payload.data.isAdmin,
                },
                isLoading: false,
                retrievingUserError: null
            };

        case userActionTypes.GET_USER_FAILURE:
            return {
                ...state,
                retrievingUserError: action.payload,
                isLoading: false,
            };

        case userActionTypes.USER_NEW_REQUEST:
        case userActionTypes.USER_UPDATE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case userActionTypes.USER_NEW_SUCCESS:
        case userActionTypes.USER_UPDATE_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    _id: action.payload.data._id,
                    name: action.payload.data.name,
                    email: action.payload.data.email,
                    password: action.payload.data.hasOwnProperty("password") ?
                        action.payload.data.password : '',
                    isAdmin: action.payload.data.isAdmin,
                },
                isLoading: false,
                error: null
            };

        case userActionTypes.USER_NEW_FAILURE:
        case userActionTypes.USER_UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        case userActionTypes.USER_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case userActionTypes.USER_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            };

        case userActionTypes.USER_DELETE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        case userActionTypes.USER_CHANGE_DATA:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;