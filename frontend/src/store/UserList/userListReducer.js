import userListTypes from './userListTypes';

const initialState = {
    users: [],
    isLoading: false,
    error: null,
};

const userListReducer = (state = initialState, action) => {
    switch(action.type){
        case userListTypes.GET_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case userListTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.data,
                isLoading: false,
                error: null
            };

        case userListTypes.GET_USERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default userListReducer;