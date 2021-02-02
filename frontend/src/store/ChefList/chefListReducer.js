import chefListTypes from './chefListTypes';

const initialState = {
    chefs: [],
    isLoading: false,
    error: null,
};

const chefListReducer = (state = initialState, action) => {
    switch(action.type){
        case chefListTypes.GET_CHEFS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case chefListTypes.GET_CHEFS_SUCCESS:
            return {
                ...state,
                chefs: action.payload.data,
                isLoading: false,
                error: null
            };

        case chefListTypes.GET_CHEFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default chefListReducer;