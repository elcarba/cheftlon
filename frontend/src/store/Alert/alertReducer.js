import alertActionTypes from './alertTypes';
const initialState = {
  type: '',
  message: ''
};

const alertReducer = (state = initialState, action) => {

  switch (action.type) {
    case alertActionTypes.ALERT_SUCCESS:
      return {
        ...state,
        type: 'success',
        message: action.payload
      };
    case alertActionTypes.ALERT_ERROR:
      return {
        ...state,
        type: 'error',
        message: action.payload
      };
    case alertActionTypes.ALERT_CLEAR:
      return {
        ...state,
        type: '',
        message: ''
      };
    default:
      return state;
  }

};

export default alertReducer;