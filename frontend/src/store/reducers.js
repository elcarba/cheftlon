import { combineReducers } from 'redux';

import alertReducer from './Alert/alertReducer';
import authReducer from './Auth/authReducer';
import userReducer from './User/userReducer';
import userListReducer from './UserList/userListReducer';

const rootReducer = combineReducers({
    alertReducer,
    authReducer,
    userListReducer,
    userReducer,
});

export default rootReducer;