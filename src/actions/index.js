import axios from "axios";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  ROOT_URL
} from "./types";

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = password => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const loginUser = ({ email, password }) => async dispatch => {
  await axios
    .post(`${ROOT_URL}/signin`, { email, password })
    .then(user => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
      });
    })
    .catch(err => {
      dispatch({ type: LOGIN_USER_FAIL });
    });
};
