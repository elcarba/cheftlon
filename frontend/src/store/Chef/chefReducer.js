import chefActionTypes from './chefTypes';

const initialState = {
    chef: {
        _id: '',
        name: '',
        biography: '',
        country: '',
        imgUrl: '',
        sumScore: 0,
        totalScore: 0
    },
    isLoading: false,
    error: null,
};

const chefReducer = (state = initialState, action) => {
    switch(action.type){
        case chefActionTypes.GET_CHEF_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case chefActionTypes.GET_CHEF_SUCCESS:
            return {
                ...state,
                chef: {
                    ...state.chef,
                    _id: action.payload.data._id,
                    name: action.payload.data.name,
                    biography: action.payload.data.biography,
                    country: action.payload.data.country,
                    imgUrl: action.payload.data.imgUrl,
                    sumScore: action.payload.data.sumScore,
                    totalScore: action.payload.data.totalScore,
                },
                isLoading: false,
                error: null
            };

        case chefActionTypes.GET_CHEF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        case chefActionTypes.CHEF_NEW_REQUEST:
        case chefActionTypes.CHEF_UPDATE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case chefActionTypes.CHEF_NEW_SUCCESS:
        case chefActionTypes.CHEF_UPDATE_SUCCESS:
            return {
                ...state,
                chef: {
                    ...state.chef,
                    _id: action.payload.data._id,
                    name: action.payload.data.name,
                    biography: action.payload.data.biography,
                    country: action.payload.data.country,
                    imgUrl: action.payload.data.imgUrl,
                    sumScore: action.payload.data.sumScore,
                    totalScore: action.payload.data.totalScore,
                },
                isLoading: false,
                error: null
            };

        case chefActionTypes.CHEF_NEW_FAILURE:
        case chefActionTypes.CHEF_UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        case chefActionTypes.CHEF_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case chefActionTypes.CHEF_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            };

        case chefActionTypes.CHEF_DELETE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        case chefActionTypes.CHEF_CHANGE_DATA:
            return {
                ...state,
                chef: {
                    ...state.chef,
                    _id: action.payload._id,
                    name: action.payload.name,
                    biography: action.payload.biography,
                    country: action.payload.country,
                    imgUrl: action.payload.imgUrl,
                    sumScore: action.payload.sumScore,
                    totalScore: action.payload.totalScore,
                },
            };

        default:
            return state;
    }
};

export default chefReducer;