import { combineReducers } from 'redux';

import alertReducer from './Alert/alertReducer';
import authReducer from './Auth/authReducer';
import userReducer from './User/userReducer';
import userListReducer from './UserList/userListReducer';
import chefListReducer from './ChefList/chefListReducer';
import chefReducer from './Chef/chefReducer';

const rootReducer = combineReducers({
    alertReducer,
    authReducer,
    userListReducer,
    userReducer,
    chefListReducer,
    chefReducer
});

export default rootReducer;