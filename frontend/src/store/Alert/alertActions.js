import alertActionTypes from './alertTypes';

export const success = message => ({
  type: alertActionTypes.ALERT_SUCCESS,
  payload: message
});

export const error = message => ({
  type: alertActionTypes.ALERT_ERROR,
  payload: message
});

export const clear = () => ({
  type: alertActionTypes.ALERT_CLEAR,
});